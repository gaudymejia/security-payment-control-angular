import { Component, Inject, OnInit, ViewChild ,Output, EventEmitter} from '@angular/core';
import { ResidentInformationModel } from 'src/app/models/ResidentInformationModel';
import { ResidentsService } from 'src/app/services/residents/residents.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateResidentsComponent } from './create-residents/create-residents.component';

export interface DialogData {
      ResidentInformationId :String;
      Name :String;
      LastName :String;
      PhoneNumber :String;
      CountryCode :String;
      Email :String;
      HouseNumber :Number;
      BlockNumber :Number;
}

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {
  name: String;
  lastName: String;
  @ViewChild('myTable', { static: true }) table: any;

  isLoading: boolean; 
  ngxDatatableMessage: any;
  timeout: any; 
  residents: ResidentInformationModel[];
  residentsSelected : ResidentInformationModel[];

  constructor(
  public dialog: MatDialog,
  private _residentService : ResidentsService,
  private _toastr : ToastrService,

  ) 
  {
    this.initializer();
  }

  ngOnInit() {
    
    this.setDataInit();
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
    }, 100);
  }

    onSelect({ selected }) {
      debugger;
    this.residentsSelected.splice(0, this.residentsSelected.length);
    this.residentsSelected.push(...selected);
      }


  setDataInit() {
    this.ngxDatatableMessage = {
      emptyMessage: 'No hay información para mostrar.'
    };
    this.getResidents();
    
  }

  initializer() {
    this.residents = new Array<ResidentInformationModel>();
    this.residentsSelected = new Array<ResidentInformationModel>();
    this.isLoading = false;
   
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(CreateResidentsComponent, {
        width: '300px',
        data: {name: this.name, lastName: this.lastName}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.lastName = result;
      });
    }
  
  

  execToast()
  {

      this._toastr.success("Hola");
  
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
      this._toastr.success("Succesful");
          
    })
  }

  deleteResident()
  {
    this.isLoading=true;  
    debugger; 
    const resident= this.residentsSelected[0];
    this._residentService.deleteResident(resident.residentInformationId)
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
