import { TestBed } from '@angular/core/testing';

import { TipodocumentosService } from './tipodocumentos.service';

describe('TipodocumentosService', () => {
  let service: TipodocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
