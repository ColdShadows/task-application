import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UsertasksService } from '../usertasks.service';
import { Observable } from 'rxjs';
import { UserTask } from '../usertask.model';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css'
})
export class TaskDashboardComponent {
  userTasks$!: Observable<UserTask[]>;
  constructor(private userTasksService: UsertasksService){}

  ngOnInit(): void {
    this.userTasks$ = this.userTasksService.getUserTasks();
  }
}
