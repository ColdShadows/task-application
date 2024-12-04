import { Component, Input } from '@angular/core';
import { UserTask } from '../user-task.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeleteUserTaskComponent } from '../delete-user-task/delete-user-task.component';
import { CommonModule } from '@angular/common';
import { UpdateUserTaskComponent } from "../update-user-task/update-user-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, DeleteUserTaskComponent, UpdateUserTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() userTask!: UserTask

  userTaskChange(updatedUserTask: UserTask) {
    this.userTask = updatedUserTask;
  }
}
