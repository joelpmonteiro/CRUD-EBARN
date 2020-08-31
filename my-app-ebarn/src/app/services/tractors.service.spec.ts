import { TestBed } from '@angular/core/testing';

import { TractorsService } from './tractors.service';

describe('TractorsService', () => {
  let service: TractorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TractorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
