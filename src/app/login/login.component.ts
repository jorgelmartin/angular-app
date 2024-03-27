import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, FormGroup, Validators, ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  // constructor(
  //   private http: HttpClient,
  //   private router: Router
  //   ) {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required])
  //   });
  // }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.http.post<LoginResponse>('https://reqres.in/api/login', { email, password }).subscribe({
      next: (response) => {
        console.log(response);
        // Lógica para manejar la respuesta del inicio de sesión exitoso
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        this.loginError = error.error.error || 'Error al iniciar sesión';
      }
    });
  }
}

export interface LoginResponse {
  token: string;
}

// @NgModule({
//   declarations: [LoginComponent],
//   imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
// })
// export class LoginModule {}

// constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     this.authService.login(this.email, this.password).subscribe((result) => {
//       if (result) {
//         this.router.navigate(['/users']);
//       } else {
//         // Manejar error de inicio de sesión
//       }
//     });
//   }
// }