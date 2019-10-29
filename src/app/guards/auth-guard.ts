import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../core/login/login.component';
import { CommonconstantService } from '../shared/services/commonconstant.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    modalRef;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private modalService: NgbModal,
        private constantService : CommonconstantService
    ) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
    
        return this.checkLogin(url);
      }
    
      checkLogin(url: string): boolean {
        const currentUser = this.authenticationService.checkloginstatus();
        if (currentUser)  { return true; }
    
        // Store the attempted URL for redirecting
        this.constantService.REDIRECT_URL = url;
    
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
      }
}