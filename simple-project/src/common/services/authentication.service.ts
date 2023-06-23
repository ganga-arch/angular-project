import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public isUserLogged(): boolean {
    const userData:string|null = localStorage.getItem('userDetails');
    if(userData) {
      const parsingData:any = JSON.parse(userData);
      if(parsingData.name === 'raja' && parsingData.password === 'raja@123') {

        return true;
      }

      return false;
    }

    return false;
  }
}
