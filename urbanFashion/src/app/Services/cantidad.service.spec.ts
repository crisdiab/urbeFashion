import { TestBed, inject } from '@angular/core/testing';

import { CantidadService } from './cantidad.service';

describe('CantidadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CantidadService]
    });
  });

  it('should ...', inject([CantidadService], (service: CantidadService) => {
    expect(service).toBeTruthy();
  }));
});
