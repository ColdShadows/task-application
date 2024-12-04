import { Component, Inject, Input } from '@angular/core';
import { UsertasksService } from '../usertasks.service';
import { UserTask } from '../user-task.model';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeleteUserTaskModalComponent } from '../delete-user-task-modal/delete-user-task-modal.component';

@Component({
  selector: 'app-delete-user-task',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-user-task.component.html',
  styleUrl: './delete-user-task.component.css'
})
export class DeleteUserTaskComponent {
  @Input() userTask!: UserTask
  
  constructor(private dialog: MatDialog) {}

  openDeleteTaskModal(): void {
    const dialogRef = this.dialog.open(DeleteUserTaskModalComponent, {
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
        this.userTask.isDeleted = true;
      }
    });
  }
}


