import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    userkey : string = 'loginDetails';
    expiredDate;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private cookieService : CookieService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.expiredDate = new Date();
        this.expiredDate.setDate( this.expiredDate.getDate() + 7 );
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    logout() {
        this.currentUserSubject.next(null);
        this.cookieService.delete(this.userkey);
    }

    createsession(userdetails){
        this.currentUserSubject.next(userdetails);
        this.cookieService.set(this.userkey,userdetails,this.expiredDate);
      }
      
    checkloginstatus(){
        console.log(this.cookieService.get(this.userkey),"login");
        
    return this.cookieService.get(this.userkey);
    }

}