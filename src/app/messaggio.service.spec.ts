import { TestBed, inject } from '@angular/core/testing';

import { MessaggioService } from './messaggio.service';

describe('MessaggioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessaggioService]
    });
  });

  it('should be created', inject([MessaggioService], (service: MessaggioService) => {
    expect(service).toBeTruthy();
  }));
});
