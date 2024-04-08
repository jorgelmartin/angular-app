import { Routes } from '@angular/router';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { LoginComponent } from './containers/login/login.component';
import { UsersComponent } from './containers/users/users.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [authGuard] },
    { path: 'user-detail/:id', component: UserDetailComponent, canActivate: [authGuard] },
];
