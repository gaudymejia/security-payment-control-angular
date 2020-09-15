import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { PaymentCalendarModel } from 'src/app/models/PaymentCalendarModel';
import { CreatePaymentCalendarComponent } from './create-payment-calendar/create-payment-calendar.component';

export interface DialogData {
    paymentDate :Date;
    ammount :Number;
}

@Component({
  selector: 'app-payment-calendar',
  templateUrl: './payment-calendar.component.html',
  styleUrls: ['./payment-calendar.component.scss']
})
export class PaymentCalendarComponent implements OnInit {
  @ViewChild('myTable', { static: true }) table: any;
  
  isLoading: boolean; 
  ngxDatatableMessage: any; 
  timeout: any; 
  paymentsCalendar: PaymentCalendarModel[];

  constructor(
    public dialog: MatDialog,
    private _toastr : ToastrService,) { }

  ngOnInit(): void {
  }


  initializer() {
    this.paymentsCalendar = new Array<PaymentCalendarModel>();
    this.isLoading = false;
  
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
      
    }
  
  
      openDialog(): void {
        const dialogRef = this.dialog.open(CreatePaymentCalendarComponent, {
          width: '300px',
          data: {}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          // this.lastName = result;
        });
      }


}
 