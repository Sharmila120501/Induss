import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CCompanyComponent } from './c-company/c-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VCompanyComponent } from './v-company/v-company.component';

@NgModule({
  declarations: [CCompanyComponent, VCompanyComponent],
  imports: [CommonModule, CompanyRoutingModule, ReactiveFormsModule],
})
export class CompanyModule {}
