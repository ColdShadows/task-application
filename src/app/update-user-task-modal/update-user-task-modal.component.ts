import { Component, Inject } from '@angular/core';
import { UsertasksService } from '../usertasks.service';
import { UserTask } from '../user-task.model';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-update-user-task-modal',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
  providers: [MatDatepickerModule, MatNativeDateModule],
  templateUrl: './update-user-task-modal.component.html',
  styleUrl: './update-user-task-modal.component.css'
})
export class UpdateUserTaskModalComponent {
  private userTask!: UserTask
  public updatedUserTask!: UserTask
  public percentageComplete!: number
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userTaskService: UsertasksService, public dialogRef: MatDialogRef<UpdateUserTaskModalComponent>) { }

  ngOnInit() {
    this.userTask = this.data.userTask;
    let original = this.userTask;
    this.updatedUserTask = {
      id: original.id, parentId: original.parentId, name: original.name, percentageComplete: original.percentageComplete,
      status: original.status, description: original.description, dueDate: original.dueDate, userid: original.userid,
      completionDate: original.completionDate, isDeleted: original.isDeleted
    };
    this.percentageComplete = original.percentageComplete * 100;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.updateStatusAndCompletionDate();

    this.dialogRef.close(this.updatedUserTask);
  }

  updatePercentageComplete() {
    this.updatedUserTask.percentageComplete = this.percentageComplete / 100;
  }

  private updateStatusAndCompletionDate() {

    if (this.percentageComplete == 100) {
      this.updatedUserTask.status = "Complete";
      this.updatedUserTask.completionDate = new Date().toISOString();
    }
    else {
      this.updatedUserTask.completionDate = null;

      if (this.percentageComplete > 0) {
        this.updatedUserTask.status = "InProgress";
      }
      else {
        this.updatedUserTask.status = "New";
      }
    }
  }
}