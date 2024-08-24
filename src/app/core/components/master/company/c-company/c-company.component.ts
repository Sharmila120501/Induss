import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../../services/shared.service';
import { CompanyService } from '../../../../services/company.service';
import { Router } from '@angular/router';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-c-company',
  templateUrl: './c-company.component.html',
  styleUrl: './c-company.component.css',
})
export class CCompanyComponent implements OnInit {
  addcompany: FormGroup;
  addAddress: FormGroup;
  ngOnInit(): void {
    this.fetchCompanyProfile();
  }
  constructor(
    private fb1: FormBuilder,
    private companyService: CompanyService,
    private shared: SharedService,
    private router: Router
  ) {
    this.addAddress = this.fb1.group({
      companyId: [sessionStorage.getItem('companyId')],
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
  _address: any;
  fetchCompanyProfile() {
    this.companyService.getCompany().subscribe((res: any) => {
      this._viewCompany = res;
      console.log('CHECK', this._viewCompany);

      this.addcompany.patchValue(this._viewCompany);
      this._address = this._viewCompany.addresses;
      console.log(this._address);

      this.addAddress.patchValue(this._address);
      if (this._address && this._address[0]) {
        this.addAddress.patchValue({
          companyAddress1: this._address[0].companyAddress1,
          companyAddress2: this._address[0].companyAddress2,
          companyCity: this._address[0].companyCity,
          companyPincode: this._address[0].companyPincode,
          companyState: this._address[0].companyState,
        });
      }
    });
  }

  AddCompany(data: any) {
    console.log(data);

    let comId = sessionStorage.getItem('companyId');
    this.companyService.addcompany(comId, data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        if (error.status == 200) {
          this.addcompany.reset();

          this.fetchCompanyProfile();
        }
      }
    );
  }
  AddAddress(data: any) {
    let comId = sessionStorage.getItem('companyId');
    this.companyService.addaddress(comId, data).subscribe((res) => {
      console.log(res);
    });
  }

  comAddId(comAddId: any) {
    throw new Error('Method not implemented.');
  }
  _viewCompany: any;
}
