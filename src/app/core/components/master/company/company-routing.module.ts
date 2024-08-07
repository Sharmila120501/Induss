import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCompanyComponent } from './c-company/c-company.component';

const routes: Routes = [
  {
    component: CCompanyComponent,
    path: 'addcompany',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
