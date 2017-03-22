import { TestBed, inject } from '@angular/core/testing';

import { TejidoService } from './tejido.service';

describe('TejidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TejidoService]
    });
  });

  it('should ...', inject([TejidoService], (service: TejidoService) => {
    expect(service).toBeTruthy();
  }));
});
