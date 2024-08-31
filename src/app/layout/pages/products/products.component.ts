import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit  {
  ngOnInit(): void {
    if(typeof localStorage!=='undefined')
      localStorage.setItem('currentPage','/product' ) 
    
    }
}
