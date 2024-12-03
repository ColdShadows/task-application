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
import { UsersService } from '../users.service';

@Component({
  imports : [ CommonModule, AsyncPipe],
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  standalone: true
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {

    this.auth.idTokenClaims$.subscribe((token) => {
      console.log('Token:', token);
    });

    // this.auth.handleRedirectCallback().subscribe((event) => {
    //   this.auth.user$.subscribe((user) => {
    //     if (user) {
    //       const userProfile = user;
    //       const accessToken = event.appState?.['accessToken']; // Get the access token

    //       // Register the user in your backend
    //       this.registerUser(userProfile);
    //     }
    //   });
    // })


    // this.auth.user$.subscribe((user) => {
    //   if (user) {
    //     const userProfile = user;

    //     // Register the user in your backend
    //     this.registerUser(userProfile);
    //   }
    // });
  }

  registerUser(userProfile: any): void {
    // Send a request to your backend to register the user
    // You can use the access token for authentication
    // ...
    this.usersService.getUser().subscribe(null, (error) => {
        
    })
  }
}