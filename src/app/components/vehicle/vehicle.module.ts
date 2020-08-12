import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AngularMaterialModule } from 'src/app/app-shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    VehicleComponent,
    VehicleDetailsComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularMaterialModule
  ]

})
export class VehicleModule { }
