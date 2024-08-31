 

import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../../shared/servcies/brands/brands.service';
import { brands } from '../../../interfaces/brands';
 
 

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent  implements OnInit { 
  brandsListt!: brands[];
  
constructor(private _BrandsService:BrandsService){}
ngOnInit(): void {
  this._BrandsService.getBrands().subscribe( ( res)=> {
    this.brandsListt  = res.data; 
  })
    

  if(typeof localStorage!=='undefined')
    localStorage.setItem('currentPage','/categories' ) 
  } 
}
  

