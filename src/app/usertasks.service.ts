import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTask } from './usertask.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsertasksService {
  constructor(private http: HttpClient) { }

  getUserTasks() : Observable<UserTask[]> {
    var stuff = this.http.get<UserTask[]>("https://localhost:44377/");
    return stuff;
  }
}
