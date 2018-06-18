import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';
import {PageChangedEvent} from 'ngx-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;
  public pageable;
  public totalElements;
  public currentPage;
  public pageSize;

  constructor(private http: HttpClient, private userService: UserService ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(page: number = 1, size: number = 3) {
    this.userService.getUsers(page, size).subscribe( data => {
      this.users = data['content'];
      this.pageable = data['pageable'];
      this.currentPage = data['number'] + 1;
      this.totalElements = data['totalElements'];
      this.pageSize = this.pageable.pageSize;
    });
  }

  pageChanged(event: PageChangedEvent) {

    this.getUsers(event.page, event.itemsPerPage);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe(() => this.getUsers());
  }
}
