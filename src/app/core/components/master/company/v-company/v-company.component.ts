import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../services/company.service';

@Component({
  selector: 'app-v-company',
  templateUrl: './v-company.component.html',
  styleUrl: './v-company.component.css',
})
export class VCompanyComponent implements OnInit {
  _companyList: any;
  _addressList: any;
  constructor(private companyService: CompanyService) {}
  ngOnInit(): void {
    this.companyService.getCompany().subscribe((res) => {
      console.log(res);
      this._companyList = res;
      console.log(this._companyList);

      this._addressList = this._companyList.addresses;
      console.log(this._addressList);
    });
  }
}
