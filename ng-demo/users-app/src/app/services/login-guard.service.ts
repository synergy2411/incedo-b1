import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor() { }

  canActivate(){
    // if user is authenticated, then allow the user
    const random = Math.round(Math.random()*10); // 0-9
    console.log("RANDOM VALUE - ", random)
    if(random > 3){
      return true;
    }
    return false;
    
  }
}
