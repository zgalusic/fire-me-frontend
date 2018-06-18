import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser(user: User): void {

    this.userService.createUser(user).subscribe(() => this.router.navigate(['/users']));
  }

}
