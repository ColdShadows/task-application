import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<User> {
    return this.http.get<User>(environment.apiUri + "/users");
  }

  createUser(user: User) : Observable<User> {
    return this.http.post<User>(environment.apiUri + "/users", user);
  }
}
