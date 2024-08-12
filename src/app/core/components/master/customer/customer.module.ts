import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CCustomerComponent } from './c-customer/c-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LCustomerComponent } from './l-customer/l-customer.component';

@NgModule({
  declarations: [CCustomerComponent, LCustomerComponent],
  imports: [CommonModule, CustomerRoutingModule, ReactiveFormsModule],
})
export class CustomerModule {}
