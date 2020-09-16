import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentCalendarModel } from 'src/app/models/PaymentCalendarModel';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { VoucherModel } from 'src/app/models/VoucherModel';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  private url: String;

  constructor(private http: HttpClient ) {
    this.url = environment.URL_SecurityPaymentControl_RestApi;
   }

   getVouchersByResidentId(residentId:String){
     const url = this.url+'api/voucher/get-vouchers?residentId='+residentId;
     return this.http.get(url);
   }

   saveVoucherByResidentId(request: VoucherModel){
    request.paymentDate=moment(request.paymentDate).format('YYYY-MM-DD');
    request.paymentCalendarDate=moment(request.paymentDate).format('YYYY-MM-DD');
    const url = this.url+'api/voucher/save-voucher-by-resident';
    return this.http.post(url, request);
  }
}