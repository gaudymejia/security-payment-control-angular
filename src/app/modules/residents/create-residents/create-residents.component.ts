import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../residents.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResidentInformationModel } from 'src/app/models/ResidentInformationModel';
import { ResidentsService } from 'src/app/services/residents/residents.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-residents',
  templateUrl: './create-residents.component.html',
  styleUrls: ['./create-residents.component.css']
})
export class CreateResidentsComponent implements OnInit {
  resident : ResidentInformationModel;
  isLoading: boolean; 
  
  constructor( public dialogRef: MatDialogRef<CreateResidentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _residentService : ResidentsService,
    private _toastr : ToastrService) {}

  ngOnInit(): void {
    this.resident = new ResidentInformationModel();
  }

  onNoClick(): void {
    this.dialogRef.close();
    location.reload();
  }

  saveResident()
  {
    this.isLoading=true;   
    this._residentService.saveResident(this.resident)
        .subscribe((response: any) => {
          this.isLoading=false;
          if (response.Message && response.Message.length>0){
            this._toastr.warning(response.Message, 'Error');
            return;
          }
          debugger;
          this._toastr.success('Transaction was successful');
          location.reload();
          });    
  }

  


}
