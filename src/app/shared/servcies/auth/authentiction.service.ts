import { resetcode, resetpassword} from './../../interfaces/data';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { email, registerData} from '../../interfaces/data';
import { base} from '../../../base/enviroment';
import { BehaviorSubject, Observable} from 'rxjs';
import { jwtDecode} from 'jwt-decode';
import { Router} from '@angular/router';
@Injectable({providedIn: 'root',})
export class AuthentictionService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient ,private _Router:Router) {
    if(typeof localStorage!=='undefined'){
      if(localStorage.getItem('userToken')){
        this.decodeUserData();
        _Router.navigate([localStorage.getItem('currentPage')]);}}}
  signup(data: registerData): Observable<any> {
    return this._HttpClient.post(`${base.baseurl}/api/v1/auth/signup`, data);
  }
  decodeUserData() {
    const token = JSON.stringify(localStorage.getItem('userToken'));
    const decode = jwtDecode(token);
    this.userData.next(decode);
    console.log(this.userData.getValue());
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
  forgetpassword(data:email):Observable<any> {
    return this._HttpClient.post(`${base.baseurl}/api/v1/auth/forgotPasswords`,data)
  }
  verifyResetCode(data:resetcode):Observable<any> {
    return this._HttpClient.post(`${base.baseurl}/api/v1/auth/verifyResetCode`,data)
  }
  resetpassword(data:resetpassword):Observable<any> {
    return this._HttpClient.put(`${base.baseurl}/api/v1/auth/resetPassword`,data)
  }
}