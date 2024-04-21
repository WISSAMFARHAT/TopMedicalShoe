import { Component } from '@angular/core';

@Component({
  selector: 'app-whishlist-page',
  templateUrl: './whishlist-page.component.html',
  styleUrl: './whishlist-page.component.css'
})
export class WhishlistPageComponent {
  countItem: number = 2;
  isEmpty = (): boolean => this.countItem === 0 ? true : false;

}
