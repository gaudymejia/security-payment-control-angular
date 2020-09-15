import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentCalendarComponent } from './create-payment-calendar.component';

describe('CreatePaymentCalendarComponent', () => {
  let component: CreatePaymentCalendarComponent;
  let fixture: ComponentFixture<CreatePaymentCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaymentCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
