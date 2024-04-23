import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {

  @Input() isMobile :boolean =false;

   subMenus = Array(3).fill(false);

  toggleSubMenu(index: number) {
    this.subMenus[index] = !this.subMenus[index];
  }
}
