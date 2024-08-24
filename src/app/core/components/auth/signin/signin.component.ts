import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit {
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

  ngOnInit(): void {
    this.SigninForm.get('password')?.disable;
  }

  logindata: any;
  passwordVerified: any;
  isVerfied: any;
  passwordEnabled: boolean = false;
  verifyEmail(email: any) {
    this.authservice.verifyEmail(email).subscribe(
      (res) => {
        console.log(res);
        console.log('hello');
      },
      (error) => {
        if (error.status == 200) {
          this.isVerfied = 200;
          this.SigninForm.get('password')?.enable();
          this.passwordEnabled = true;
        }
        if (error.status == 400) {
          this.isVerfied = 404;
          this.passwordEnabled = false;
          console.log('hel50lo');

          this.SigninForm.get('password')?.disable();
        }
      }
    );
  }
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
