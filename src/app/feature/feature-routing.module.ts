import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./movement-vehicles/movement-vehicles.module').then(f => f.MovementVehiclesModule)
  },{
    path: 'report',
    loadChildren: () => import('./report/report.module').then(f => f.ReportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
