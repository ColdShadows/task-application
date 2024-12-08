import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../user.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';
import { UpdateUserPreferencesModalComponent } from '../update-user-preferences-modal/update-user-preferences-modal.component';
import { UserPreferences } from '../user-preferences.model';
import { ThemeService } from '../themes.service';
import { UserPreferencesService } from '../user-preferences.service';
import { Theme } from '../theme.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, UpdateUserPreferencesModalComponent, MatExpansionModule, MatDialogModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
  isOpen = false;
  user?: User | null;
  userPreferences?: UserPreferences | null;
  themes!: Theme[];

  constructor(private userPreferencesService: UserPreferencesService, private authentication: AuthenticationService, private themeService: ThemeService, private dialog: MatDialog){}

  ngOnInit(): void {

    this.themeService.getThemes();
    // Load default theme on initialization
    this.themeService.themes.subscribe(e => {
      this.themes = e;
      this.setTheme();
    })

    this.authentication.userData$.subscribe(e => {
      this.user = e;
    });
    
    this.authentication.isLoggedIn$.subscribe(e =>{
      if(e){
        this.userPreferencesService.getUserPreferences().subscribe(c =>{
          this.userPreferences = c;
          this.setTheme();
         });
      }      
    })   
  }

  setTheme(){
    if(this.userPreferences?.themeName){
      this.themeService.loadTheme(this.userPreferences.themeName)
    }
    else{
      this.themeService.loadTheme('default')
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  openUpdateUserPreferencesModal(): void {
    const dialogRef = this.dialog.open(UpdateUserPreferencesModalComponent, {
      width: '600px',
      data: {
        userPreferences: this.userPreferences,
        themes: this.themes
      },
      disableClose: true,
      position: {
        left: 'calc(50% - 300px)',
      },
      panelClass: 'modal-panel',
      hasBackdrop: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Modal result:', result);
        if(result.id){
          this.userPreferencesService.updateUserPreferences(result).subscribe(e =>{
            this.userPreferences = e;
          })
        }
        else{
          this.userPreferencesService.createUserPreferences(result).subscribe(e =>{
            this.userPreferences = e;
          })
        }        
      }
    });
  }
}