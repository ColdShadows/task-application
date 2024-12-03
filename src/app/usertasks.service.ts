import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTask } from './user-task.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsertasksService {

  constructor(private http: HttpClient) { }

  getUserTasks() : Observable<UserTask[]> {
    var stuff = this.http.get<UserTask[]>(environment.apiUri + "/userTasks");
    return stuff;
  }

  getUserTask(userTaskId : string) : Observable<UserTask> {
    var stuff = this.http.get<UserTask>(environment.apiUri + "/userTasks/" + userTaskId);
    return stuff;
  }

  createUserTask(userTask : UserTask) : Observable<UserTask> {
    var stuff = this.http.post<UserTask>(environment.apiUri + "/userTasks", userTask);
    return stuff;
  }

  updateUserTask(userTask : UserTask) : Observable<UserTask> {
    var stuff = this.http.put<UserTask>(environment.apiUri + "/userTasks/" + userTask.id, userTask);
    return stuff;
  }

  deleteUserTask(userTaskId : string) : Observable<void> {
    return this.http.delete<void>(environment.apiUri + "/userTasks/" + userTaskId);
  }
}
