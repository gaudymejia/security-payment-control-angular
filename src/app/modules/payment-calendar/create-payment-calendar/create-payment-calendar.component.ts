import { Component, OnInit ,Inject} from '@angular/core';
import { PaymentCalendarModel } from 'src/app/models/PaymentCalendarModel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../payment-calendar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-payment-calendar',
  templateUrl: './create-payment-calendar.component.html',
  styleUrls: ['./create-payment-calendar.component.css']
})
export class CreatePaymentCalendarComponent implements OnInit {
paymentCalendar : PaymentCalendarModel;
isLoading : boolean;

constructor( public dialogRef: MatDialogRef<CreatePaymentCalendarComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private _toastr : ToastrService) {}

  ngOnInit(): void {
    this.paymentCalendar = new PaymentCalendarModel();

  }

  onNoClick(): void {
    this.dialogRef.close();
    location.reload();
  }

  savePaymentCalendar()
  {
    this.isLoading=true;   
    // this._residentService.saveResident(this.resident)
    //     .subscribe((response: any) => {
    //       this.isLoading=false;
    //       if (response.Message && response.Message.length>0){
    //         this._toastr.warning(response.Message, 'Error');
    //         return;
    //       }
    //       debugger;
    //       this._toastr.success('Transaction was successful');
    //       location.reload();
    //       });    
  }

}
