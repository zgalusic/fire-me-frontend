import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './model/user';

const htttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.userUrl + '/users');
  }
}
