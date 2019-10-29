import { Component, OnInit } from '@angular/core';
import { CommonconstantService } from '../../shared/services/commonconstant.service';
import { AuthenticationService } from '../../guards/authentication.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public constantService : CommonconstantService, private authService : AuthenticationService,
    private router : Router) {
      console.log(constantService.USER_LOGGEDIN,"user login status");
      
     }

  ngOnInit() {
  }
  
  ngAfterContentInit(){
    const currentUser = this.authService.checkloginstatus();
    console.log(currentUser,"currentUser");
    
    this.constantService.USER_LOGGEDIN = false;   
    if (currentUser) {
      this.constantService.USER_LOGGEDIN = true;
    }
  }

  logout(){
    this.constantService.USER_LOGGEDIN = false;
    this.authService.logout();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/']);
  }

}
