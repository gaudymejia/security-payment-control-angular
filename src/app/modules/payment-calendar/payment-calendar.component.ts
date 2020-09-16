import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { PaymentCalendarModel } from 'src/app/models/PaymentCalendarModel';
import { PaymentCalendarService } from 'src/app/services/payment-calendar/payment-calendar.service';
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
  paymentConfigurations: PaymentCalendarModel[];

  constructor(
    public dialog: MatDialog,
    private _toastr : ToastrService,
    private _paymentCalendarService : PaymentCalendarService) 
    {
    this.paymentConfigurations = new Array<PaymentCalendarModel>();

     }

  ngOnInit(): void {
  this.initializer();
  this.setDataInit();
  }


  initializer() {
    this.paymentConfigurations = new Array<PaymentCalendarModel>();
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
      this.getPaymentConfigurations()
    }
  
  
      openDialog(): void {
        const dialogRef = this.dialog.open(CreatePaymentCalendarComponent, {
          width: '325px',
          data: {}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }

      getPaymentConfigurations() {

        this.isLoading=true;
        this._paymentCalendarService.getPaymentConfigurations()
        .subscribe((response:any)=>{
          if(response.data && response.data.length===0)
          {
            this.isLoading=false;
            this._toastr.error(response.Message,"Error");
            this.paymentConfigurations = new Array<PaymentCalendarModel>();
            return;
          }
          this.isLoading=false;
          this.paymentConfigurations=response.data;
          console.log(this.paymentConfigurations);
          this._toastr.success("Succesful");
              
        })
      }


}
 