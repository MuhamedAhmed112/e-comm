import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../../base/enviroment';
import { Observable } from 'rxjs';
import { sliderCategory } from '../../interfaces/sliderCategores';

@Injectable({
  providedIn: 'root'
})
export class CatgeoryService {

  constructor(private _HttpClient:HttpClient) { }
  getAllCategories():Observable<sliderCategory> {
    return this._HttpClient.get<sliderCategory>(`${base.baseurl}/api/v1/categories`)
  }
}
