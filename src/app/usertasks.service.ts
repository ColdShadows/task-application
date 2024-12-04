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
    return this.http.get<UserTask[]>(environment.apiUri + "/userTasks");
  }

  getUserTask(userTaskId : string) : Observable<UserTask> {
    return this.http.get<UserTask>(environment.apiUri + "/userTasks/" + userTaskId);
  }

  createUserTask(userTask : UserTask) : Observable<UserTask> {
    return this.http.post<UserTask>(environment.apiUri + "/userTasks", userTask);
  }

  updateUserTask(userTask : UserTask) : Observable<UserTask> {
    return this.http.put<UserTask>(environment.apiUri + "/userTasks/" + userTask.id, userTask);
  }

  deleteUserTask(userTaskId : string) : Observable<void> {
    return this.http.delete<void>(environment.apiUri + "/userTasks/" + userTaskId);
  }
}
