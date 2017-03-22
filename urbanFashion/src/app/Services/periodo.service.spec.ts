import { TestBed, inject } from '@angular/core/testing';

import { PeriodoService } from './periodo.service';

describe('PeriodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodoService]
    });
  });

  it('should ...', inject([PeriodoService], (service: PeriodoService) => {
    expect(service).toBeTruthy();
  }));
});
