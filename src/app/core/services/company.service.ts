import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPonit } from '../../../environments/environment.apifile';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  addcompany(comId: any, data: any) {
    return this.http.post(endPonit.addCompany + comId, data);
  }
  addaddress(comId: any, data: any) {
    return this.http.post(endPonit.addCompany + comId, data);
  }
  getCompany() {
    let comID = sessionStorage.getItem('companyId');
    return this.http.get(endPonit.getcompany + '/' + comID);
  }
}
