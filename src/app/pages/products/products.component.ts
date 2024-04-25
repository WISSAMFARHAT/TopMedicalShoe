import { Component,Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class ProductsComponent {
  isFilterOpen :boolean =false;
  constructor(@Inject(DOCUMENT) private document: Document) {}


  ToogleMenu(){
    this.isFilterOpen=!this.isFilterOpen;
    this.document.documentElement.classList.toggle("_noscroll");
  }
}
