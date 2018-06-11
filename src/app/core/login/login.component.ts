import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials = {username: '', password: ''};

  constructor( private router: Router, private loginService: LoginService ) { }

  ngOnInit() {
  }

  login(): void {

    if (this.credentials.username === 'admin' && this.credentials.password === 'admin') {
      this.loginService.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }

  }

}
