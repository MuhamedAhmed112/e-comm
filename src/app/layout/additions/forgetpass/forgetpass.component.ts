 import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthentictionService } from '../../../shared/servcies/auth/authentiction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [ReactiveFormsModule ,],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})
export class ForgetpassComponent {
emailForm:FormGroup = new FormGroup({
  email:new FormControl(null, [Validators.required, Validators.email])
})
codeForm:FormGroup = new FormGroup({
  resetcode:new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{4,}$/)])
})
newpassForm:FormGroup = new FormGroup({
  email:new FormControl(null, [Validators.required, Validators.email]),
  newPassword:new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8,}$/)]),
})
isloading:boolean = false;
errmasg!:string ;
emailformflag:boolean = true;
codeformflag:boolean = false;
newpassformflag:boolean = false;

submitemailform(){
  this.isloading=true;
 if(this.emailForm.valid){
  this._AuthentictionService.forgetpassword(this.emailForm.value).subscribe({
    next: res=>{
      console.log(res);
      this.isloading=false;
      this.emailformflag=false;
      this.codeformflag=true;
    },
    error:(err)=>{
      console.error(err);
      this.isloading=false;

      this.errmasg=err.error.message;
      
    }
  })
 }  
  
}

submitCodeform(){
  this.isloading=true;
 if(this.codeForm.valid){
  this._AuthentictionService.verifyResetCode(this.codeForm.value).subscribe({
    next: res=>{
      console.log(res);
      this.isloading=false;
      this.codeformflag=false;
this.newpassformflag=true;
    },
    error:(err)=>{
      console.error(err);
      this.isloading=false;

      this.errmasg=err.error.message;
      
    }
  })
 }  
  
}
submitnewpassform(){
  this.isloading=true;
 if(this.newpassForm.valid){
  this._AuthentictionService.resetpassword(this.newpassForm.value).subscribe({
    next: res=>{
      console.log(res);
      this.isloading=false;
      localStorage.setItem('userToken',res.token);
      this._AuthentictionService.decodeUserData();
      this._Router.navigate(['/home']);
    },
    error:(err)=>{
      console.error(err);
      this.isloading=false;

      this.errmasg=err.error.message;
      
    }
  })
 }  
  
}
constructor(private _AuthentictionService:AuthentictionService ,private _Router:Router){}
}
