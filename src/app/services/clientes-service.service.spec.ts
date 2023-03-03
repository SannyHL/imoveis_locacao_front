import { TestBed } from '@angular/core/testing';

import { ClientesService } from './clientes.service';
import { ClientesServiceService } from 'src/services/clientes-service.service';

describe('ClientesServiceService', () => {
  let service: ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
