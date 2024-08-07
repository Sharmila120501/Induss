import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-customer',
  templateUrl: './c-customer.component.html',
  styleUrl: './c-customer.component.css',
})
export class CCustomerComponent {
  addcustomerForm: FormGroup;
  isShippingEnabled: boolean = false;
  successToster: boolean = false;
  message: string = '';

  constructor(private fb1: FormBuilder) {
    this.addcustomerForm = this.fb1.group({
      comId: [],
      cusName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      cusConPerson: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      cusConPhone: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)],
      ],
      cusEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/
          ),
        ],
      ],
      cusGst: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/),
        ],
      ],
      cusBillAndShip: ['', [Validators.required]],
      cusBAdd1: ['', [Validators.required]],
      cusBAdd2: ['', [Validators.required]],
      cusSAdd1: ['', [Validators.required]],
      cusSAdd2: ['', [Validators.required]],
      cusBPcode: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)],
      ],
      cusSPcode: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)],
      ],
      cusBCity: ['', [Validators.required]],
      cusSCity: ['', [Validators.required]],
      cusBState: ['', [Validators.required]],
      cusSState: ['', [Validators.required]],
    });
  }

  onRadioChange(optionValue: string) {
    if (optionValue === '400') {
      this.isShippingEnabled = true;
      this.addcustomerForm.patchValue({
        cusSAdd1: '',
        cusSAdd2: '',
        cusSPcode: '',
        cusSCity: '',
        cusSState: '',
      });
    }
    if (optionValue === '200') {
      this.isShippingEnabled = true;
      this.addcustomerForm.patchValue({
        cusSAdd1: this.addcustomerForm.value.cusBAdd1,
        cusSAdd2: this.addcustomerForm.value.cusBAdd2,
        cusSPcode: this.addcustomerForm.value.cusBPcode,
        cusSCity: this.addcustomerForm.value.cusBCity,
        cusSState: this.addcustomerForm.value.cusBState,
      });
    }
  }
}
