import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { AngularMaterialModule } from 'src/app/app-shared/angular-material/angular-material.module';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class SummaryModule { }
