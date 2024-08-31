import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../../base/enviroment';
import { productRes } from '../../../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProducts():Observable<productRes>{
   return this._HttpClient.get<productRes>(`${base.baseurl}/api/v1/products`,   )
  }
}
