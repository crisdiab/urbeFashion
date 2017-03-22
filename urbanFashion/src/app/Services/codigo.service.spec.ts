import { TestBed, inject } from '@angular/core/testing';

import { CodigoService } from './codigo.service';

describe('CodigoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodigoService]
    });
  });

  it('should ...', inject([CodigoService], (service: CodigoService) => {
    expect(service).toBeTruthy();
  }));
});
