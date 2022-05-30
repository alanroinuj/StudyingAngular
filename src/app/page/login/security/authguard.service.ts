import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/Router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  private isAuthenticated: boolean = false;
  constructor() {  }

  canActivate() {
    return true;
  }
}
