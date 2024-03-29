import { Routes } from '@angular/router';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { LoginComponent } from './containers/login/login.component';
import { UsersComponent } from './containers/users/users.component';

// VERIFY TOKEN IN LOCALSTORAGE
const canActivateWithToken = () => {
    if (localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }
};

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [canActivateWithToken] },
    { path: 'user-detail/:id', component: UserDetailComponent, canActivate: [canActivateWithToken] },
];
