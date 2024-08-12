import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPonit } from '../../../environments/environment.apifile';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getPincode(pin: any) {
    return this.http.get(endPonit.pincode, pin);
  }
}
