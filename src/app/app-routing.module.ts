import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PaymentCalendarComponent } from './modules/payment-calendar/payment-calendar.component';
import { ResidentsComponent } from './modules/residents/residents.component';
import { VoucherComponent } from './modules/voucher/voucher.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, 
  {
    path: 'residents',
    component: ResidentsComponent
  },
  {
    path: 'voucher',
    component: VoucherComponent
  },
  {
    path: 'payment-calendar',
    component: PaymentCalendarComponent
  },

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
