import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CBankComponent } from './c-bank/c-bank.component';
import { LBankComponent } from './l-bank/l-bank.component';

const routes: Routes = [
  {
    path: 'addbank',
    component: CBankComponent,
  },
  {
    path: 'listbank',
    component: LBankComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankRoutingModule {}
