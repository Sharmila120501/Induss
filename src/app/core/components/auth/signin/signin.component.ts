import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  SigninForm: FormGroup;
  constructor(
    private sign: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.SigninForm = this.sign.group({
      companyEmail: [],
      password: [],
    });
  }
  logindata: any;
  signin(data: any) {
    console.log(data);

    this.authservice.login(data).subscribe((res) => {
      console.log(res);
      this.logindata = res;
      sessionStorage.setItem('companyId', this.logindata.companyId);
      this.router.navigate(['/home']);
    });
  }
}
