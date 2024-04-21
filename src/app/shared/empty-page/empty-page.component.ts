import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.css'
})
export class EmptyPageComponent {
  @Input() isCart:boolean=false;
}
