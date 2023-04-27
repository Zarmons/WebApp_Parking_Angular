import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovementVehiclesComponent } from './movement-vehicles/movement-vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: MovementVehiclesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementVehiclesRoutingModule { }
