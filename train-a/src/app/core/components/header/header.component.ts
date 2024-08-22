import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAuthenticated = false;
  isAdmin = false;

  showSignupForm = false;
  showLoginForm = false;

  toggleSignup() {
    this.showSignupForm = !this.showSignupForm;
    this.showLoginForm = false;
  }

  toggleLogin() {
    this.showLoginForm = !this.showLoginForm;
    this.showSignupForm = false;
  }

  logout() {
  }
}
