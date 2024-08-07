import { Component, Input } from '@angular/core';
import { BankService } from '../../../../services/bank.service';

@Component({
  selector: 'app-l-bank',
  templateUrl: './l-bank.component.html',
  styleUrl: './l-bank.component.css',
})
export class LBankComponent {
  @Input() id: any;
  constructor(private bser: BankService) {}
  _bankList: any;
  companyId: any;
  bankId: any;
}
