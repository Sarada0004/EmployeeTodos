import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonconstantService {

  constructor() { }

  USER_LOGGEDIN = false;
  REDIRECT_URL = "/";
}

