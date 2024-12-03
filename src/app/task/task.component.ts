import { Component, Input } from '@angular/core';
import { UserTask } from '../user-task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() userTask!: UserTask
}
