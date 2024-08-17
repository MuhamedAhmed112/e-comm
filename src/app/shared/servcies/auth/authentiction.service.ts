import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerData } from '../../interfaces/data';
import { base } from '../../../base/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentictionService {
  constructor(private _HttpClient: HttpClient) {

   }
   signup(data:registerData):Observable<any> {
    return this._HttpClient.post(`${base.baseurl}/api/v1/auth/signup`,data)
   }

 
}

