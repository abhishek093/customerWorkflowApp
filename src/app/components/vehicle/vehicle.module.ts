import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';

@NgModule({
  declarations: [
    VehicleComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedComponentModule
  ]
})
export class VehicleModule { }
