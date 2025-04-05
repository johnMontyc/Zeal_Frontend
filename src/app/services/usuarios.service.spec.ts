import { TestBed } from '@angular/core/testing';

import { ZealService } from './usuarios.service';

describe('ZealService', () => {
  let service: ZealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
