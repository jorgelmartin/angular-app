import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    RouterOutlet, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService],
})
export class AppComponent {

  constructor(
    private authService: AuthService, 
    private router: Router
    ) {}

  // VERIFY TOKEN
  isLoggedIn() {
    return this.authService.isLoggedIn();
  };

  // LOGOUT
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  };
};