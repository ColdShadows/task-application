import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  imports: [ CommonModule, AsyncPipe ],
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html' ,
  standalone: true
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}