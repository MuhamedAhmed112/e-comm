import { AuthentictionService } from './../../../shared/servcies/auth/authentiction.service';
import { signinService } from './../../../shared/servcies/auth/signin.service';
import { Component } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormControl,Validators,} from '@angular/forms';
 import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{8,}$/),
    ]),
  });
  isloading: boolean = false;
  errmsg!: string;
   
  constructor(private _signinService: signinService, private _Router: Router ,private _AuthentictionService:AuthentictionService) {}

  submitlogin() {
    if (this.loginform.valid) {
      this.isloading = true;
      this._signinService.signin(this.loginform.value).subscribe({
        next: (res) => {
          this.isloading = false;
          console.log(res);
          localStorage.setItem('userToken', res.token);
          this._AuthentictionService.decodeUserData();
          this._Router.navigate(['/home']);
        },
        error: (err) => {
          this.isloading = false;

          console.error(err);
          this.errmsg = err.error.message;
        },
      });
    }
  }
}
