import { Component, Inject } from '@angular/core';
import { DOCUMENT, CommonModule, AsyncPipe } from '@angular/common';
import { AuthenticationService } from '../authentication.service';

@Component({
  imports : [ CommonModule, AsyncPipe],
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  standalone: true
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public authentication: AuthenticationService) {}
    
}