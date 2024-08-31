import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homeslider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.css'
})
export class HomesliderComponent {
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
        items: 1
      },
       
    },
    nav: true
  }
}
