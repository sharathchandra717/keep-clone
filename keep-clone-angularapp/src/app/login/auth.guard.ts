import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('loggedIn') === "true" || localStorage.getItem('loggedIn') === null) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
