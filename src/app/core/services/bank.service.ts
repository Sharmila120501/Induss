import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPonit } from '../../../environments/environment.apifile';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpClient) {}
  addbank(comId: any, data: any) {
    return this.http.post(endPonit.addBank + comId, data);
  }
  fetchIfsc(ifsc: any) {
    return this.http.get(endPonit.ifsccode + ifsc);
  }
  getBank(comId: any) {
    return this.http.get(endPonit.getBank, comId);
  }
}
