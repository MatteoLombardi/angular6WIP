import { TestBed, inject } from '@angular/core/testing';

import { GraficoService } from './grafico.service';

describe('GraficoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraficoService]
    });
  });

  it('should be created', inject([GraficoService], (service: GraficoService) => {
    expect(service).toBeTruthy();
  }));
});
