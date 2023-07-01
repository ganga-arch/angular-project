
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot,  } from '@angular/router';
 
 
@Injectable()
export class ActivateChildGuardService {
 
    constructor(private _router:Router ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {

        return true;
    }
 
}