import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserData } from '../../types';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  providers: [UserService],
})

export class UserDetailComponent implements OnInit {
  user!: UserData;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { };

  // SUBSCRIBE TO CHANGES IN ROUTE PARAMETERS
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.loadUserDetail(userId);
    });
  };

  // LOAD USER DETAIL FROM API
  loadUserDetail(userId: number): void {
    this.userService.getUserDetail(userId).subscribe(response => {
      this.user = response.data;
    });
  };

  // GO BACK TO USERS PAGE
  goToUsersPage(): void {
    this.router.navigate(['/users']);
  };
};