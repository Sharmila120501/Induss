import { Component, Input, OnInit } from '@angular/core';
import { BankService } from '../../../../services/bank.service';

@Component({
  selector: 'app-l-bank',
  templateUrl: './l-bank.component.html',
  styleUrl: './l-bank.component.css',
})
export class LBankComponent implements OnInit {
  constructor(private bankservice: BankService) {}

  _bankList: any;
  companyId: any;
  ngOnInit(): void {
    this.companyId = sessionStorage.getItem('companyId');
    if (this.companyId) {
      this.getbank();
    } else {
      console.error('Company ID not found in sessionStorage');
    }
  }
  getbank() {
    return this.bankservice.getBank(this.companyId).subscribe((res) => {
      console.log(res);
      this._bankList = res;
    });
  }
}
