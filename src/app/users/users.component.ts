import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentPage: number = 1;
  hasNextPage: boolean = true;
  hasPreviousPage: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(pageNumber: number): void {
    this.http.get<{ data: User[]; page: number; total_pages: number }>(`https://reqres.in/api/users?page=${pageNumber}`).pipe(
      map(response => {
        this.hasNextPage = response.page < response.total_pages;
        this.hasPreviousPage = response.page > 1;
        return response.data;
      })
    ).subscribe(users => {
      this.users = users;
    });
  }

  loadNextPage(): void {
    this.currentPage++;
    this.loadUsers(this.currentPage);
  }

  loadPreviousPage(): void {
    this.currentPage--;
    this.loadUsers(this.currentPage);
  }
}