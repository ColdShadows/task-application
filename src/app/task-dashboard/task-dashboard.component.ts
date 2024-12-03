import { Component } from '@angular/core';
import { UsertasksService } from '../usertasks.service';
import { concatMap, map, Observable, tap } from 'rxjs';
import { UserTask } from '../user-task.model';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { TasksContainerComponent } from '../tasks-container/tasks-container.component';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [TasksContainerComponent, CommonModule],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css'
})
export class TaskDashboardComponent {
  user!: User;
  metadata = {};
  userTasks!: UserTask[];
  constructor(private userTasksService: UsertasksService, private usersService: UsersService, private auth: AuthService, private http: HttpClient){}

  ngOnInit(): void {
     this.userTasksService.getUserTasks().subscribe(c =>{
      this.userTasks = c;
     });
  }

  checkUserDetails() : void {

    this.auth.user$
    .pipe(
      concatMap((user: any) =>
        // Use HttpClient to make the call
        this.http.get(
          encodeURI(`https://dev-1ytqfri14i4zv6zm.us.auth0.com/api/v2/users/${user?.sub}`)
        )
      ),
      map((user: any) => user.user_metadata),
      tap((meta) => (this.metadata = meta))
    )
    .subscribe();
  }

  getUser() : void {
    this.usersService.getUser().subscribe(x => {
      this.user = x;
    });
  }

  getToken() : void {
    this.auth.getAccessTokenSilently().subscribe(e => 
      {
        console.log(e);
      },f => 
        {
          console.log(f);
        } );
  }
}
