import { TestBed } from '@angular/core/testing';

import { PaymentCalendarService } from './payment-calendar.service';

describe('PaymentCalendarService', () => {
  let service: PaymentCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
