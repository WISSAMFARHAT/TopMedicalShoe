import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  countItem: number = 2;
  isEmpty = (): boolean => this.countItem === 0 ? true : false;
}
