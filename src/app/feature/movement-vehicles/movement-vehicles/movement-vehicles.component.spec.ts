import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementVehiclesComponent } from './movement-vehicles.component';

describe('MovementVehiclesComponent', () => {
  let component: MovementVehiclesComponent;
  let fixture: ComponentFixture<MovementVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
