import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
import { UsersService } from './users.service';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private userSubject = new BehaviorSubject<User | null>(null);

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  userData$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private auth: AuthService, private usersService: UsersService) { 
    this.auth.user$.subscribe((user) => {
      if (user) {  
        this.isLoggedInSubject.next(true);
        this.usersService.getUser().subscribe(e => {
          this.userSubject.next(e);
          }, (error) => {
            if (error.status === 404) {
              this.usersService.createUser({ firstName: user.given_name, lastName: user.family_name, usersubject: user.sub! }).subscribe(
                e => {
                  this.userSubject.next(e);
                },
                e => console.log(e))              
            }
          });
        }
        else{
          this.isLoggedInSubject.next(false);
          this.userSubject.next(null);
        }
    });
  }

  // Simulate login
  login(): void {
      this.auth.loginWithRedirect()  
  }

  // Simulate logout
  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } })
  }

  // Get the current value
  getCurrentUser(): any {
    return this.userSubject.value;
  }
}