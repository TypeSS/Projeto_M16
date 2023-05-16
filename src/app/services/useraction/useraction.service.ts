import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseractionService {

  constructor() { }

  verifyUser(){
    if(localStorage.getItem('id') != null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem('id');
  }
}
