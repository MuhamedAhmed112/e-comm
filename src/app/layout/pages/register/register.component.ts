import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthentictionService } from '../../../shared/servcies/auth/authentiction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerform: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{8,}$/),
      ]),
      rePassword: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    this.checkrepassword
  );
  isloading: boolean = false;
  errmsg!: string;
  constructor(
    private _AuthentictionService: AuthentictionService,
    private _Router: Router
  ) {}
  checkrepassword(x: AbstractControl) {
    if (x.get('password')?.value === x.get('rePassword')?.value) {
      return null;
    } else {
      x.get('rePassword')?.setErrors({ notSame: true });
      return { notSame: true };
    }
  }
  submitreg() {
    if (this.registerform.valid) {
      this.isloading = true;
      this._AuthentictionService.signup(this.registerform.value).subscribe({
        next: (res) => {
          this.isloading = false;

          this._Router.navigate(['/login']);
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
