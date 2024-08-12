import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCustomerComponent } from './c-customer/c-customer.component';
import { LCustomerComponent } from './l-customer/l-customer.component';

const routes: Routes = [
  {
    component: CCustomerComponent,
    path: 'addcustomer',
  },
  {
    component: LCustomerComponent,
    path: 'listcustomer',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
