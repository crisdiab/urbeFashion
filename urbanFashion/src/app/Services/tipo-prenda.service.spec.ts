import { TestBed, inject } from '@angular/core/testing';

import { TipoPrendaService } from './tipo-prenda.service';

describe('TipoPrendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoPrendaService]
    });
  });

  it('should ...', inject([TipoPrendaService], (service: TipoPrendaService) => {
    expect(service).toBeTruthy();
  }));
});
