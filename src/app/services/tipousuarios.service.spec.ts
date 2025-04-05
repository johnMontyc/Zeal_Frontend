import { TestBed } from '@angular/core/testing';

import { Tipo_usuariosService } from './tipousuarios.service';

describe('Tipo_usuariosService', () => {
  let service: Tipo_usuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tipo_usuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
