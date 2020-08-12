import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', loadChildren: '../components/customer/customer.module#CustomerModule' },
  { path: 'vehicle', loadChildren: '../components/vehicle/vehicle.module#VehicleModule' },
  { path: 'summary', loadChildren: '../components/summary/summary.module#SummaryModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
