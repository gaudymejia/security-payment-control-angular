import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResidentsComponent } from 'src/app/modules/residents/residents.component';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material-module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaymentCalendarComponent } from 'src/app/modules/payment-calendar/payment-calendar.component';
import { VoucherComponent } from 'src/app/modules/voucher/voucher.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ResidentsComponent,
    PaymentCalendarComponent,
    VoucherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialModule,
    NgxDatatableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
