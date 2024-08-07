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
  addlogo: FormGroup;
  addSign: FormGroup;
  selectedFile: File | null = null;
  selectedSignature: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  previewUrl1: string | ArrayBuffer | null = null;
  signaturePreviewUrl: string | ArrayBuffer | null = null;
  isShippingEnabled: boolean = false;
  message: string = '';
  successToster: boolean = false;
  imageData: any;
  imageUrl: any;

  isDeleteAddress: boolean = true;
  isSaveAddress: boolean = false;

  _viewCompany: any;

  constructor(
    private fb1: FormBuilder,
    private ser: CompanyService,
    private shared: SharedService
  ) {
    this.addlogo = this.fb1.group({
      comLogo: [null, Validators.required],
    });
    this.addSign = this.fb1.group({
      comSignature: [null, Validators.required],
    });

    this.addcompany = this.fb1.group({
      emailId: [
        { value: '', disabled: true },
        [Validators.required, Validators.email],
      ],
      comName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      comEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/
          ),
        ],
      ],

      comLandLine: [],
      comGst: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/),
        ],
      ],
      comPan: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)],
      ],
      comConPerson: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      comConPhone: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)],
      ],
      comUrl: [],

      companyAddressDto: this.fb1.array([this.showaddress()]),
    });
  }

  get companyAddressDto() {
    return this.addcompany.get('companyAddressDto') as FormArray;
  }
  showaddress() {
    return this.fb1.group({
      comBAdd1: ['', [Validators.required]],
      comBAdd2: ['', [Validators.required]],

      comBPcode: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)],
      ],

      comBCity: ['', Validators.required],

      comBState: ['', Validators.required],
    });
  }
  addAddress() {
    this.companyAddressDto.push(this.showaddress());
  }

  SubmitCompany(data: any) {
    console.log(data);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
