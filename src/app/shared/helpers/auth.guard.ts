import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";

import { SessionService } from "../session.service";

@Injectable({ providedIn: 'root'})

export class AuthGuard implements CanActivate{

  constructor(
      private router: Router,
      private sessionService: SessionService
    ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.sessionService.currentUserValue;
    if(currentUser){
      return true;
    }

    this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
    return false;
  }
}
