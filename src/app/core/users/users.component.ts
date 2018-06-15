import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;

  constructor(private http: HttpClient, private userService: UserService ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe( userData => this.users = userData);
  }
}
