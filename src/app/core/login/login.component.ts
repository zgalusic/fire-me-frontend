import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor( private router: Router, private loginService: LoginService ) { }

  ngOnInit() {
  }

  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {
      this.loginService.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }

  }

}
