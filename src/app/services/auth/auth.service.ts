import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../types';

export const URL = 'https://reqres.in/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // API CALL LOGIN
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${URL}login`, { email, password })
  };
};
