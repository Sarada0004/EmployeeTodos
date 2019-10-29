import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../guards/authentication.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonconstantService} from '../../shared/services/commonconstant.service';

@Component({
  selector: 'aims-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public previousurl;

  logintActive : boolean = false;
  usernotvalidexcepation : boolean = false;
  userdetails : object = {
    "login":"",
    "password":""
  }
  validate : object = {"login":true,"password":true}

  loginCredintials : any = {
    "login" : "sarada",
    "password" : "12345"
  };
  
  constructor(  private toastr: ToastrService, private authService : AuthenticationService, private router : Router, private activeModal : NgbActiveModal, private constantService : CommonconstantService) { }

  ngOnInit() {
  }

  changetype(type:any){
    this.usernotvalidexcepation = false;
    if(type === "login"){
      if(this.userdetails['login'] === "" || this.userdetails['login'] === undefined)
      this.validate['login'] = false;
     else
      this.validate['login'] = true;
    }else if(type === "password"){
      if(this.userdetails['password'] === "")
      this.validate['password'] = false;
     else
      this.validate['password'] = true;
    }
  }

  submituserdetails(){
    if(this.validateuser()){
       this.logintActive = true;
       if(this.userdetails['login'] == this.loginCredintials.login && this.userdetails['password'] == this.loginCredintials.password){
        this.logintActive = false;
        this.toastr.success("Logged in successfully");
        this.authService.createsession(this.userdetails);
        this.router.navigate([this.constantService.REDIRECT_URL])
        this.constantService.USER_LOGGEDIN = true;
       }else{
         this.toastr.error("Invalid Username and Password");
         this.usernotvalidexcepation = true;
         this.constantService.USER_LOGGEDIN = false;
       }
    }
 }

 validateuser():boolean{
  if(this.userdetails['login'] === "")
    this.validate['login'] = false;
   else
    this.validate['login'] = true;

   if(this.userdetails['password'] === "")
    this.validate['password'] = false;
   else
    this.validate['password'] = true;

   if(this.validate['login'] && this.validate['password'])
    return true;
   else
    return false;
}



}
