  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLoggedIn: boolean;
  private username: string;

  constructor() {
    this.userLoggedIn = false;
  }

  setUserLoggedIn(): void {
    this.userLoggedIn = true;
  }

  isUserLoggedIn(): boolean {
    return this.userLoggedIn;
  }
}
