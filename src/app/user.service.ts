import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserApiResponse, UserData, UserDetailResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // BRING USERS FROM API
  getUsers(pageNumber: number): Observable<UserApiResponse> {
    return this.http.get<UserApiResponse>(`https://reqres.in/api/users?page=${pageNumber}`);
  }

  // GET USER DETAIL
  getUserDetail(userId: number): Observable<UserDetailResponse> {
    return this.http.get<UserDetailResponse>(`https://reqres.in/api/users/${userId}`);
  }
}