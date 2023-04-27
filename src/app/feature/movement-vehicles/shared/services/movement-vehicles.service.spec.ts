import { TestBed } from '@angular/core/testing';

import { MovementVehiclesService } from './movement-vehicles.service';

describe('MovementVehiclesService', () => {
  let service: MovementVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
