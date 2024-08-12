import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../../../services/bank.service';

@Component({
  selector: 'app-c-bank',
  templateUrl: './c-bank.component.html',
  styleUrl: './c-bank.component.css',
})
export class CBankComponent {
  addBankForm: FormGroup;

  constructor(private fb1: FormBuilder, private bankservice: BankService) {
    this.addBankForm = this.fb1.group(
      {
        companyId: [sessionStorage.getItem('companyId')],
        accountNo: [
          '',
          [
            Validators.required,
            Validators.pattern(/^-?\d*\.?\d+$/),
            Validators.minLength(8),
            Validators.maxLength(15),
          ],
        ],
        confirmAccount: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
          ],
        ],
        ifscCode: [
          '',
          [Validators.required, Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)],
        ],
        bankName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
        branchName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z ]+')],
        ],
      },
      { validator: this.confirmAccountNumberValidator }
    );
  }
  addBank(data: any) {
    console.log(data);
    let comId = sessionStorage.getItem('companyId');
    this.bankservice.addbank(comId, data).subscribe((res) => {
      console.log(res);
    });
    this.addBankForm.reset();
  }

  BANK: string = '';
  BRANCH: string = '';
  _ifscfetch: any;
  fetchIfscCode(data: any) {
    const ifscCode = this.addBankForm.get('ifscCode')?.value;
    console.log(ifscCode);
    this.bankservice.fetchIfsc(ifscCode).subscribe((res) => {
      console.log(res);
      this._ifscfetch = res;

      this.addBankForm.patchValue({
        bankName: this._ifscfetch.BANK,
        branchName: this._ifscfetch.BRANCH,
      });
    });
  }
  confirmAccountNumberValidator(group: FormGroup) {
    const accountNo = group.get('accountNo')?.value;
    const conAccountNo = group.get('confirmAccount')?.value;

    return accountNo === conAccountNo ? null : { mismatch: true };
  }
}
