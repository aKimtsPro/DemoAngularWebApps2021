import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestActivateService implements CanActivate {

  constructor() { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree

  canActivate(): boolean
  {
    return true; // si return false pas d'accès
  }
}
