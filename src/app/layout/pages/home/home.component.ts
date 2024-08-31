import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/servcies/product/product.service';
import { product } from '../../../interfaces/products';
import { CatgeoryService } from '../../../shared/servcies/catgeory/catgeory.service';
import { CategorySliderComponent } from '../../additions/category-slider/category-slider.component';
import { HomesliderComponent } from "../../additions/homeslider/homeslider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySliderComponent, HomesliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  productList!:product[];
  isloading:boolean = false;
  constructor(private _ProductService:ProductService ,private _CatgeoryService:CatgeoryService ) { }
ngOnInit(): void {
if(typeof localStorage!=='undefined')
  localStorage.setItem('currentPage','/home' ) 
this.getAllProducts();

}
getAllProducts(){
  this.isloading=true;
this._ProductService.getAllProducts().subscribe({
  next :res =>{
    console.log( this.productList);
    this.productList=res.data;
    this.isloading=false;
  },
  error :err =>{
    console.log(err);
    this.isloading=false;
    
  }
})
}
  }


