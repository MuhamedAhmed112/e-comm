import { Component } from '@angular/core';
import { BrandsService } from '../../../shared/servcies/brands/brands.service';
import { categori } from '../../../interfaces/categories';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categorilist!:categori[]
  constructor(private _BrandsService:BrandsService){}
  ngOnInit(): void {
    this._BrandsService.getcategori().subscribe( ( res)=> {
      this.categorilist  = res.data; 
    })
      
    } 
}
