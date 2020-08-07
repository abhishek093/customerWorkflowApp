import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './action-button/action-button.component';
import { AngularMaterialModule } from 'src/app/app-shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    ActionButtonComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ], 
  exports: [
    ActionButtonComponent
  ]
})
export class SharedComponentModule { }
