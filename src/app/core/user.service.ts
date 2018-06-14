import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const htttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<Object> {
    return this.httpClient.get(this.userUrl + '/users');
  }
}
