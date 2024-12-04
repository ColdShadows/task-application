import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { UpdateUserTaskModalComponent } from '../update-user-task-modal/update-user-task-modal.component';
import { UsertasksService } from '../usertasks.service';
import { MatDialog } from '@angular/material/dialog';
import { UserTask } from '../user-task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-user-task.component.html',
  styleUrl: './update-user-task.component.css'
})
export class UpdateUserTaskComponent {
  @Input() userTask!: UserTask;
  @Output() userTaskChange = new EventEmitter<UserTask>();

  constructor(private userTasksService: UsertasksService, private dialog: MatDialog) {}

  onUserTaskUpdate(updatedTask: UserTask){
    this.userTask = updatedTask;
    this.userTaskChange.emit(updatedTask);
  }

  openUpdateTaskModal(): void {
    const dialogRef = this.dialog.open(UpdateUserTaskModalComponent, {
      width: '600px',
      data: {
        userTask: this.userTask
      }, // Optional data to pass to the modal
      disableClose: true, // Prevents closing by clicking outside the modal
      backdropClass: 'custom-backdrop', // Optional: Custom backdrop styles
      position: {
        top: '20%',
        left: 'calc(50% - 300px)',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Modal result:', result);
        this.userTasksService.updateUserTask(result).subscribe(e =>{
          this.userTask = e;
          this.onUserTaskUpdate(e);
        })
      }
    });
  }
}


