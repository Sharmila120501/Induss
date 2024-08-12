import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-l-customer',
  templateUrl: './l-customer.component.html',
  styleUrl: './l-customer.component.css',
})
export class LCustomerComponent implements OnInit {
  constructor(private customerservice: CustomerService) {}
  ngOnInit(): void {
    this.getallCustomer();
  }
  _customerList: any;
  getallCustomer() {
    this.customerservice.getCustomer().subscribe((res) => {
      console.log(res);
      this._customerList = res;
      console.log(this._customerList);
    });
  }
}
