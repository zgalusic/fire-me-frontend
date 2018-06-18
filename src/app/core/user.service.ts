import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './model/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080';
  private pageParams;

  constructor(private httpClient: HttpClient) { }

  public getUsers(page: number = 1, size: number = 3): Observable<User> {

    const params = new HttpParams()
      .set('page', String(page))
      .set('size', String(size));

    return this.httpClient.get<User>(this.userUrl + '/users', {params});
  }

  public getUserCount(): Observable<number> {

    return this.httpClient.get<number>(this.userUrl + '/users/count');
  }

  public getUser(userId: string): Observable<User> {

    return this.httpClient.get<User>(this.userUrl + '/users/' + userId);
  }

  public updateUser(user: User): Observable<User> {

    return this.httpClient.put<User>(this.userUrl + '/users/' + user.id, user);
  }
}
