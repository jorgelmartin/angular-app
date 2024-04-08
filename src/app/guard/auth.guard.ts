import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// VERIFY TOKEN IN LOCALSTORAGE
export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  };
};