import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
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
    component: ResidentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'voucher',
    component: VoucherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-calendar',
    component: PaymentCalendarComponent,
    canActivate: [AuthGuard]
  },

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
