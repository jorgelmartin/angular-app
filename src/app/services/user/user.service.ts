import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersApiResponse, UserDetailResponse } from '../../types';

export const URL = 'https://reqres.in/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // BRING USERS FROM API
  getUsers(pageNumber: number): Observable<UsersApiResponse> {
    return this.http.get<UsersApiResponse>(`${URL}users?page=${pageNumber}`);
  }

  // GET USER DETAIL
  getUserDetail(userId: number): Observable<UserDetailResponse> {
    return this.http.get<UserDetailResponse>(`${URL}users/${userId}`);
  }
}