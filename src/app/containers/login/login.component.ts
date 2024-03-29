import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})

export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    // INITIALIZE LOGIN FORM 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  };

  // METHOD TO SEND LOGIN FORM
    onSubmit() {
    if (this.loginForm.invalid) {
      return;
    };
    const { email, password } = this.loginForm.value;

    //CALL API FROM AUTHSERVICE
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/users']);
      },
      error: (error) => {
        this.loginError = error.error.error || 'Error al iniciar sesión';
      }
    });
  };
};