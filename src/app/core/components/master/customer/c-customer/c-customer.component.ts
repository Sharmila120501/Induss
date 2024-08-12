import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../../services/customer.service';
import { SharedService } from '../../../../services/shared.service';

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

  constructor(
    private fb1: FormBuilder,
    private customerService: CustomerService,
    private shared: SharedService
  ) {
    this.addcustomerForm = this.fb1.group({
      customerName: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      contactPerson: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      contactPhone: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)],
      ],
      contactEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/
          ),
        ],
      ],
      customerGst: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/),
        ],
      ],
      addresses: this.fb1.array([this.showaddress()]),
    });
  }
  get addresses() {
    return this.addcustomerForm.get('addresses') as FormArray;
  }
  showaddress() {
    return this.fb1.group({
      statusCode: ['', [Validators.required]],
      billingAddress1: ['', [Validators.required]],
      billingAddress2: ['', [Validators.required]],
      shippingAddress1: ['', [Validators.required]],
      shippingAddress2: ['', [Validators.required]],
      billingPincode: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)],
      ],
      shippingPincode: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)],
      ],
      billingCity: ['', [Validators.required]],
      shippingCity: ['', [Validators.required]],
      billingState: ['', [Validators.required]],
      shippingState: ['', [Validators.required]],
    });
  }
  addAddress() {
    this.addresses.push(this.showaddress());
  }

  onRadioChange(optionValue: string, index: number) {
    const addressGroup = this.addresses.at(index) as FormGroup;

    if (optionValue === '400') {
      this.isShippingEnabled = true;
      addressGroup.patchValue({
        shippingAddress1: '',
        shippingAddress2: '',
        shippingPincode: '',
        shippingCity: '',
        shippingState: '',
      });
    }
    if (optionValue === '200') {
      this.isShippingEnabled = true;
      addressGroup.patchValue({
        shippingAddress1: addressGroup.value.billingAddress1,
        shippingAddress2: addressGroup.value.billingAddress2,
        shippingPincode: addressGroup.value.billingPincode,
        shippingCity: addressGroup.value.billingCity,
        shippingState: addressGroup.value.billingState,
      });
    }
  }

  AddCustomer(data: any) {
    console.log(data);

    this.customerService.addCustomer(data).subscribe((res) => {
      console.log(res);
    });
  }
}
