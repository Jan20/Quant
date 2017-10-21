import { TestBed, inject } from '@angular/core/testing';

import { VantageService } from './vantage.service';

describe('VantageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VantageService]
    });
  });

  it('should be created', inject([VantageService], (service: VantageService) => {
    expect(service).toBeTruthy();
  }));
});
