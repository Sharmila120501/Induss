import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-v-customer',
  templateUrl: './v-customer.component.html',
  styleUrl: './v-customer.component.css',
})
export class VCustomerComponent implements OnInit, OnChanges {
  @Output() closeCustomer = new EventEmitter<boolean>();
  @Input() customerData: any;

  isShippingEnabled: boolean = false;
  isSave = false;
  isEdit = true;
  isSaveIcon = true;
  isDelete = false;

  updateCustomerForm: FormGroup;
  constructor(
    private updateForm: FormBuilder,
    private customerService: CustomerService
  ) {
    this.updateCustomerForm = this.updateForm.group({
      id: [],
      customerName: [],
      contactPerson: [],
      contactPhone: [],
      contactEmail: [],
      customerGst: [],
      addresses: this.updateForm.array([this.showaddress()]),
    });
  }

  get addresses() {
    return this.updateCustomerForm.get('addresses') as FormArray;
  }
  showaddress() {
    return this.updateForm.group({
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
  ngOnInit(): void {
    this.fetchCustomer();
    this.disableForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customerData'] && changes['customerData'].currentValue) {
      this.updateCustomerForm.patchValue(this.customerData);
      this.disableForm();
    }
  }
  private disableForm() {
    Object.keys(this.updateCustomerForm.controls).forEach((form) => {
      this.updateCustomerForm.get(form)?.disable();
    });
  }
  edit() {
    Object.keys(this.updateCustomerForm.controls).forEach((form) => {
      this.updateCustomerForm.get(form)?.enable();
    });
    this.isSave = true;
    this.isEdit = false;
  }

  fetchCustomer() {
    this.customerService.getCustomer().subscribe((res: any) => {
      this.customerData = res;
      console.log(this.customerData);
      this.updateCustomerForm.patchValue(this.customerData);
    });
  }
}
