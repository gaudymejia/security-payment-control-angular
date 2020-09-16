import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResidentInformationModel } from 'src/app/models/ResidentInformationModel';
import { VoucherService } from 'src/app/services/voucher/voucher.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../voucher/voucher.component';
import { VoucherModel } from 'src/app/models/VoucherModel';

@Component({
  selector: 'app-create-voucher',
  templateUrl: './create-voucher.component.html',
  styleUrls: ['./create-voucher.component.css']
})
export class CreateVoucherComponent implements OnInit {
  voucher : VoucherModel;
  isLoading: boolean; 
  constructor(public dialogRef: MatDialogRef<CreateVoucherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _voucherService : VoucherService,
    private _toastr : ToastrService) { }

  ngOnInit(): void {
    this.voucher = new VoucherModel();
    console.log(this.data);

  }

  onNoClick(): void {
    this.dialogRef.close();
    location.reload();
  }

  saveVoucher()
  {
   this.voucher.residentId= this.data.selectedResident.residentInformationId;
    this.isLoading=true;   
    this._voucherService.saveVoucherByResidentId(this.voucher)
        .subscribe((response: any) => {
          this.isLoading=false;
          if (response.Message && response.Message.length>0){
            this._toastr.warning(response.Message, 'Error');
            return;
          }
          this._toastr.success('Transaction was successful');
          location.reload();
          });    
  }


} 
