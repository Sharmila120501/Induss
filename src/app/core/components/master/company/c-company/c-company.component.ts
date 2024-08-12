import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../../services/shared.service';
import { CompanyService } from '../../../../services/company.service';

@Component({
  selector: 'app-c-company',
  templateUrl: './c-company.component.html',
  styleUrl: './c-company.component.css',
})
export class CCompanyComponent {
  addcompany: FormGroup;
  addAddress: FormGroup;

  constructor(
    private fb1: FormBuilder,
    private companyService: CompanyService
  ) {
    this.addAddress = this.fb1.group({
      companyId: [],
      companyAddress1: [],
      companyAddress2: [],
      companyPincode: [],
      companyCity: [],
      companyState: [],
    });
    this.addcompany = this.fb1.group({
      companyId: [],
      companyName: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      companyEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/
          ),
        ],
      ],

      companyGst: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/),
        ],
      ],
      companyPan: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)],
      ],
      contactPerson: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      contactPhone: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)],
      ],
      companyUrl: [],
    });
  }

  AddCompany(data: any) {
    let comId = sessionStorage.getItem('companyId');
    this.companyService.addcompany(comId, data).subscribe((res) => {
      console.log(res);
    });
  }
  AddAddress(data: any) {
    let comId = sessionStorage.getItem('companyId');
    this.companyService.addaddress(comId, data).subscribe((res) => {
      console.log(res);
    });
  }
}
