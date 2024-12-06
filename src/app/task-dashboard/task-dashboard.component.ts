import { Component } from '@angular/core';
import { UsertasksService } from '../usertasks.service';
import { UserTask } from '../user-task.model';
import { User } from '../user.model';
import { TasksContainerComponent } from '../tasks-container/tasks-container.component';
import { CommonModule } from '@angular/common';
import { CreateUserTaskModalComponent } from '../create-user-task-modal/create-user-task-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [TasksContainerComponent, CommonModule, CreateUserTaskModalComponent],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.css'
})
export class TaskDashboardComponent {
  user?: User | null;
  userTasks!: UserTask[];
  constructor(private userTasksService: UsertasksService, private authentication: AuthenticationService, private dialog: MatDialog){}

  ngOnInit(): void {

    this.authentication.userData$.subscribe(e => {
      this.user = e;
    });
    
    this.authentication.isLoggedIn$.subscribe(e =>{

      if(e){
        this.userTasksService.getUserTasks().subscribe(c =>{
          this.userTasks = c;
         });
      }      
    })   
  }

  openCreateModal(): void {
    const dialogRef = this.dialog.open(CreateUserTaskModalComponent, {
      width: '600px',
      data: {}, // Optional data to pass to the modal
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
        this.userTasksService.createUserTask({name: result.name, description: result.description, status: "New", percentageComplete: 0, dueDate: result.dueDate ? result.dueDate : null}).subscribe(e =>{
          this.userTasks = this.userTasks.concat(e);
        })
      }
    });
  }
}
