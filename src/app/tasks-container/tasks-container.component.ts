import { Component, Input } from '@angular/core';
import { UserTask } from '../user-task.model';
import { TaskComponent } from "../task/task.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-container',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks-container.component.html',
  styleUrl: './tasks-container.component.css'
})
export class TasksContainerComponent {
  @Input() userTasks! : UserTask[];
}
