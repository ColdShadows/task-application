// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-auth-button',
//   standalone: true,
//   imports: [],
//   templateUrl: './auth-button.component.html',
//   styleUrl: './auth-button.component.css'
// })
// export class AuthButtonComponent {

// }


import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, CommonModule, AsyncPipe } from '@angular/common';

@Component({
  imports : [ CommonModule, AsyncPipe],
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  standalone: true
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}