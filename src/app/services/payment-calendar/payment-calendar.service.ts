import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentCalendarModel } from 'src/app/models/PaymentCalendarModel';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PaymentCalendarService {
  private url: String;

  constructor(private http: HttpClient ) {
    this.url = environment.URL_SecurityPaymentControl_RestApi;
   }

   getPaymentConfigurations(){
     const url = this.url+'api/payment-calendar/get-payment-calendar-configuration';
     return this.http.get(url);
   }

   savePaymentCalendarConfiguration(request: PaymentCalendarModel){
    debugger;
    request.paymentDate=moment(request.paymentDate).format('YYYY-MM-DD');
    const url = this.url+'api/payment-calendar/save-payment-calendar-configuration';
    return this.http.post(url, request);
  }

}
