import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../../../services/bank.service';

@Component({
  selector: 'app-v-bank',
  templateUrl: './v-bank.component.html',
  styleUrl: './v-bank.component.css',
})
export class VBankComponent implements OnInit, OnChanges {
  @Output() closeBank = new EventEmitter<boolean>();
  @Input() bankData: any;

  isSave = false;
  isEdit = true;
  isSaveIcon = true;
  isDelete = false;

  viewBankForm: FormGroup;
  constructor(private fb1: FormBuilder, private bankservice: BankService) {
    this.viewBankForm = this.fb1.group({
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
      branchName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    });
  }
  ngOnInit(): void {
    this.fetchBank();
    this.disableForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bankData'] && changes['bankData'].currentValue) {
      this.viewBankForm.patchValue(this.bankData);
    }
  }

  private disableForm() {
    Object.keys(this.viewBankForm.controls).forEach((form) => {
      this.viewBankForm.get(form)?.disable();
    });
  }
  edit() {
    Object.keys(this.viewBankForm.controls).forEach((form) => {
      this.viewBankForm.get(form)?.enable();
    });
    this.isSave = true;
    this.isEdit = false;
  }

  fetchBank() {
    const comId = sessionStorage.getItem('companyId');
    if (comId) {
      this.bankservice.getBank(comId).subscribe(
        (res: any) => {
          this.bankData = res;
          console.log(this.bankData);
          this.viewBankForm.patchValue(this.bankData);
        },
        (error) => {
          console.error('Error fetching product details', error);
          // Handle error appropriately
        }
      );
    }
  }
}
