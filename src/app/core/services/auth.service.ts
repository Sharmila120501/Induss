import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPonit } from '../../../environments/environment.apifile';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(endPonit.signin, data);
  }
  verifyEmail(Id: any) {
    let emailId = new HttpParams();
    emailId = emailId.append('companyEmail', Id);
    return this.http.post(endPonit.verify + Id, emailId);
  }
}
