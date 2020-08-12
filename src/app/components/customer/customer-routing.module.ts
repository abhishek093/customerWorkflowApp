import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes: Routes = [
  {
    path : '', component : CustomerComponent,
    children: [
      {
        path: '',
        redirectTo: 'customer-details'
      },
      {
        path :'',
        component: CustomerDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
