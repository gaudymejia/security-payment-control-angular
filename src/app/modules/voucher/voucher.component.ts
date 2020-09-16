import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ResidentInformationModel } from 'src/app/models/ResidentInformationModel';
import { VoucherModel } from 'src/app/models/VoucherModel';
import { ResidentsService } from 'src/app/services/residents/residents.service';
import { VoucherService } from 'src/app/services/voucher/voucher.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  @Output('statusSelectedChangeResident') statusSelectedChangeResident: EventEmitter<any> = new EventEmitter();
  selectedResident : ResidentInformationModel;
  residents : ResidentInformationModel[];
  vouchersByResident : VoucherModel[];
  ngxDatatableMessage: any;
  isLoading: boolean; 
  timeout: any;
  
  constructor(  public dialog: MatDialog,
    private _residentService : ResidentsService,
    private _voucherService: VoucherService,
    private _toastr : ToastrService,
    ) 
    { 
      this.residents= new Array<ResidentInformationModel>();
    }

  ngOnInit(): void {
    this.initializer();
    this.setDataInit();
  
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
    }, 100);
  }

  setDataInit() {
    this.ngxDatatableMessage = {
      emptyMessage: 'No hay información para mostrar.'
    };
    this.getResidents();

  }
  initializer() {}

  selectedTResidentChanged() {
    this.statusSelectedChangeResident.emit(this.selectedResident);
    this.getVouchers();
  }

  getResidents() {
    this.isLoading=true;
    this._residentService.getResidents()
    .subscribe((response:any)=>{
      if(response.data && response.data.length===0)
      {
        this.isLoading=false;
        this._toastr.error(response.Message,"Error");
        this.residents = new Array<ResidentInformationModel>();
        return;
      }
      this.isLoading=false;
      this.residents=response.data;
      console.log(this.residents);
          
    })
  }

  getVouchers() {
    this.isLoading=true;
    this._voucherService.getVouchersByResidentId(this.selectedResident.residentInformationId)
    .subscribe((response:any)=>{
      if(response.data && response.data.length===0)
      {
        this.isLoading=false;
        this._toastr.info(response.Message,"Not voucher exists for this resident.");
        this.residents = new Array<ResidentInformationModel>();
        return;
      }
      this.isLoading=false;

      this.vouchersByResident= this.materializeVoucher(response.data);
     
    })
  }
  materializeVoucher(data: any): VoucherModel[] {
    if(data===null)
    {
      return new Array<VoucherModel>();

    }
    else{
      const vouchersReturn = new Array<VoucherModel>();
      data.forEach(voucher => {
          voucher.name = this.selectedResident.name;
          voucher.lastName= this.selectedResident.lastName;
          vouchersReturn.push(voucher);
        });
  
        return vouchersReturn;
    }
 
    }
  
 
}
