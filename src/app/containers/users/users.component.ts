import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserData } from '../../types';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [UserService],
})

export class UsersComponent implements OnInit {
  users: UserData[] = [];
  currentPage: number = 1;
  hasNextPage: boolean = true;
  hasPreviousPage: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    ) { }

  // LOAD USERS  ON INITIALIZATION
  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  };

  // LOAD LIST OF USERS WITH PAGINATION
  loadUsers(pageNumber: number): void {
    this.userService.getUsers(pageNumber).subscribe(response => {
      this.users = response.data;
      this.hasNextPage = this.currentPage < response.total_pages;
      this.hasPreviousPage = this.currentPage > 1;
    });
  };

  // LOAD NEXT PAGE
  loadNextPage(): void {
    this.currentPage++;
    this.loadUsers(this.currentPage);
  };

  // LOAD PREVIOUS PAGE
  loadPreviousPage(): void {
    this.currentPage--;
    this.loadUsers(this.currentPage);
  };

  // SEND TO USER DETAILS
  showUserDetail(userId: number): void {
    this.router.navigate(['/user-detail', userId]);
  };
};