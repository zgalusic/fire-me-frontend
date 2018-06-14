import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials = {username: '', password: ''};

  private user: User;
  private headers: string[];

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit() { }

  login(): void {

    this.authService.authenticate(this.credentials.username, this.credentials.password)
      .subscribe(resp => {
          const keys = resp.headers.keys();
          this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`)
          this.user = {...resp.body};
          this.success();
      });
  }

  success(): void {
    console.log(this.headers);

    if (this.user && this.user.eMail === this.credentials.username) {
      console.log(this.user);
      this.authService.setAuthenticated(true);
      this.router.navigate(['dashboard']);
    }
  }

}
