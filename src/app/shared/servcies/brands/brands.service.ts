import { base } from './../../../base/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandsObject } from '../../../interfaces/brands';
import { cateObject } from '../../../interfaces/categories';
 

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
  getBrands():Observable<brandsObject> {
    return this._HttpClient.get<brandsObject>(`${base.baseurl}/api/v1/brands`,);
  }
  getcategori():Observable<cateObject> {
    return this._HttpClient.get<cateObject>(`${base.baseurl}/api/v1/categories`,);
  }
}
