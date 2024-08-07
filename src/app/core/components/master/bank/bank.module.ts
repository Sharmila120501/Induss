import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { CBankComponent } from './c-bank/c-bank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LBankComponent } from './l-bank/l-bank.component';
import { VBankComponent } from './v-bank/v-bank.component';

@NgModule({
  declarations: [CBankComponent, LBankComponent, VBankComponent],
  imports: [CommonModule, BankRoutingModule, ReactiveFormsModule],
})
export class BankModule {}
