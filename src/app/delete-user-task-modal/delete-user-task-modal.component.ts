import { Component, Inject } from '@angular/core';
import { UsertasksService } from '../usertasks.service';
import { UserTask } from '../user-task.model';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-user-task',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-user-task-modal.component.html',
  styleUrl: './delete-user-task-modal.component.css'
})
export class DeleteUserTaskModalComponent {
  
  private userTask! : UserTask  
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private userTaskService: UsertasksService, public dialogRef: MatDialogRef<DeleteUserTaskModalComponent>) {}

  ngOnInit(){
    this.userTask = this.data.userTask;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.userTaskService.deleteUserTask(this.userTask.id!).subscribe(e => {
      this.dialogRef.close(true);
    })    
  }
}