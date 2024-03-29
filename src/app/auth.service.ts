import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // API CALL LOGIN
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://reqres.in/api/login', { email, password }).pipe(
      tap(response => localStorage.setItem('token', response.token))
    );
  };
  
  //CHECK TOKEN
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  };

  //LOGOUT
  logout(): void {
    localStorage.removeItem('token');
  };
};