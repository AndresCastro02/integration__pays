import { TestBed } from '@angular/core/testing';

import { PalommaServiceService } from './palomma-service.service';

describe('PalommaServiceService', () => {
  let service: PalommaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalommaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
