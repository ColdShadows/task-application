import { Component, Input } from '@angular/core';
import { UserTask } from '../user-task.model';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() userTask!: UserTask

}
