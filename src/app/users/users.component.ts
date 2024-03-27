import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://reqres.in/api/users?page=1').subscribe(response => {
      this.users = response.data; // Asignamos el array de usuarios
    });
  }
}