import { Component,Inject, Injectable  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class HeaderComponent {
  openMenuMobile:boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleMobileMenu() {
    this.openMenuMobile = !this.openMenuMobile;
    this.document.documentElement.classList.toggle("menuopen");
  }
}
