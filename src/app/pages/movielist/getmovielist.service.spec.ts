import { TestBed } from '@angular/core/testing';

import { GetmovielistService } from './getmovielist.service';

describe('GetmovielistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmovielistService = TestBed.get(GetmovielistService);
    expect(service).toBeTruthy();
  });
});
