import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router
  ) { }
  
  // VERIFY TOKEN
  isLoggedIn() {
    return !!localStorage.getItem('token');
  };

  // LOGOUT
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  };
};

