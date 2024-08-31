import { Component, OnInit } from '@angular/core';
import { CatgeoryService } from '../../../shared/servcies/catgeory/catgeory.service';
import { categoriesinfo,  } from '../../../shared/interfaces/sliderCategores';
import { CarouselModule,   } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.css'
})
export class CategorySliderComponent implements OnInit {
  ngOnInit():void {
    this.getAllCategory();
 }
 categorylist!:categoriesinfo[];
 isloading:boolean=false;
 constructor(private _CatgeoryService:CatgeoryService){}


 
getAllCategory(){
  this.isloading=true;
 
 this._CatgeoryService.getAllCategories().subscribe({

   next: res=>{
     this.categorylist=res.data ;  
     console.log(this.categorylist);
     this.isloading=false;
   
   },
   error:(err)=>{
     console.error(err);
this.isloading=false;
   } 
 });
}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
 autoplaySpeed: 1,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },
       
    },
    nav: true
  }
}  

  

 
