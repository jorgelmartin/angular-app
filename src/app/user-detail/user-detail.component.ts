import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})

export class UserDetailComponent implements OnInit {
  user!: UserData;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  // SUBSCRIBE TO CHANGES IN ROUTE PARAMETERS
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.loadUserDetail(userId);
    });
  }

  // LOAD USER DETAIL FROM API
  loadUserDetail(userId: number): void {
    this.http.get<{ data: UserData }>(`https://reqres.in/api/users/${userId}`)
    .subscribe(response => {
      this.user = response.data;
    });
  }

  // GO BACK TO USERS PAGE
  goToUsersPage(): void {
    this.router.navigate(['/users']);
  }
}