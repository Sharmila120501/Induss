import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCustomerComponent } from './c-customer/c-customer.component';

const routes: Routes = [
  {
    component: CCustomerComponent,
    path: 'addcustomer',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
