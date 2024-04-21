import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  @Input() isCart: boolean = false;
  @Input() countItem: number = 2;
}
