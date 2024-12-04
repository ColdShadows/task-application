import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-create-user-task-modal',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
  providers: [MatDatepickerModule, MatNativeDateModule],
  templateUrl: './create-user-task-modal.component.html',
  styleUrl: './create-user-task-modal.component.css'
})
export class CreateUserTaskModalComponent {
  constructor(public dialogRef: MatDialogRef<CreateUserTaskModalComponent>) {} // Use relevant library

  close(): void {
    this.dialogRef.close(); // Closes the modal
  }

  onSubmit(data: any): void {
    console.log('Form submitted:', data);
    this.dialogRef.close(data);
  }
}