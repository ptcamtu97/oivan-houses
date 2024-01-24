import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  #router = inject(Router);

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // Redirect to the login page if there is no token
      this.#router.navigate(['/']);
      return false;
    }
    return true;
  }
}
