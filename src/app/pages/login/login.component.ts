import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword:boolean =false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
