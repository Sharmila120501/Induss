import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCompanyComponent } from './c-company/c-company.component';
import { VCompanyComponent } from './v-company/v-company.component';

const routes: Routes = [
  {
    component: CCompanyComponent,
    path: 'addcompany',
  },
  {
    component: VCompanyComponent,
    path: 'viewcompany',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
