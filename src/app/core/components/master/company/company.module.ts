import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CCompanyComponent } from './c-company/c-company.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CCompanyComponent],
  imports: [CommonModule, CompanyRoutingModule, ReactiveFormsModule],
})
export class CompanyModule {}
