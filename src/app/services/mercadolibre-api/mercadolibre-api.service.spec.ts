import { TestBed } from '@angular/core/testing';

import { MercadolibreApiService } from './mercadolibre-api.service';

describe('MercadolibreApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadolibreApiService = TestBed.get(MercadolibreApiService);
    expect(service).toBeTruthy();
  });
});
