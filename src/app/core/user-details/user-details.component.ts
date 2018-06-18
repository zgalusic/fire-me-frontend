import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(userId).subscribe(user => this.user = user);
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe( user => this.user = user);
  }
}
