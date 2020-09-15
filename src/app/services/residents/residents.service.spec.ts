import { TestBed } from '@angular/core/testing';

import { ResidentsService } from './residents.service';

describe('ResidentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentsService = TestBed.get(ResidentsService);
    expect(service).toBeTruthy();
  });
});
