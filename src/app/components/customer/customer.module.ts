import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AngularMaterialModule } from 'src/app/app-shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularMaterialModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
