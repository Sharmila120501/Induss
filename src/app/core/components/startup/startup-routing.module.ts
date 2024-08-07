import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CCustomerComponent } from '../master/customer/c-customer/c-customer.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../master/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../master/bank/bank.module').then((m) => m.BankModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../master/company/company.module').then(
            (m) => m.CompanyModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupRoutingModule {}
