import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-bank',
  templateUrl: './c-bank.component.html',
  styleUrl: './c-bank.component.css',
})
export class CBankComponent {
  addBankForm: FormGroup;
  isShippingEnabled: boolean = false;
  successToster: boolean = false;
  message: string = '';

  constructor(private fb1: FormBuilder) {
    this.addBankForm = this.fb1.group({
      comId: [],
      accountNumber: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      confirmAccount: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z ]+')],
      ],
      ifsc: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]],
      bankName: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/
          ),
        ],
      ],
      branchName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/),
        ],
      ],
    });
  }
}
