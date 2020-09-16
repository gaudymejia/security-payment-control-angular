import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CreateResidentsComponent } from './modules/residents/create-residents/create-residents.component';
import { MaterialModule } from './material-module';
import { CreatePaymentCalendarComponent } from './modules/payment-calendar/create-payment-calendar/create-payment-calendar.component';
import { CreateVoucherComponent } from './modules/voucher/create-voucher/create-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateResidentsComponent,
    CreatePaymentCalendarComponent,
    CreateVoucherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 