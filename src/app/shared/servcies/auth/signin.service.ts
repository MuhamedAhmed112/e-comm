import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base } from '../../../base/enviroment';
import { Observable } from 'rxjs';
import { logindata } from '../../interfaces/logindata';

@Injectable({
  providedIn: 'root'
})
export class signinService {
   
  constructor(private _HttpClient: HttpClient) {

   }
   signin(data:logindata):Observable<any> {
    return this._HttpClient.post(`${base.baseurl}/api/v1/auth/signin`,data)
   }
 

}

 
 
