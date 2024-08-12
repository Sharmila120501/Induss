import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPonit } from '../../../environments/environment.apifile';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  addCustomer(data: any) {
    return this.http.post(endPonit.AddCustomer, data);
  }
  getCustomer() {
    return this.http.get(endPonit.getCustomer);
  }
}
