import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementVehiclesRoutingModule } from './movement-vehicles-routing.module';
import { MovementVehiclesComponent } from './movement-vehicles/movement-vehicles.component';


@NgModule({
  declarations: [
    MovementVehiclesComponent
  ],
  imports: [
    CommonModule,
    MovementVehiclesRoutingModule
  ]
})
export class MovementVehiclesModule { }
