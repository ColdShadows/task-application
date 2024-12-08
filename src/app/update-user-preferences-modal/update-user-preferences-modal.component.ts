import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserPreferences } from '../user-preferences.model';
import { Theme } from '../theme.model';
import { ThemeService } from '../themes.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user-preferences-modal',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './update-user-preferences-modal.component.html',
  styleUrl: './update-user-preferences-modal.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UpdateUserPreferencesModalComponent {
  userPreferences!: UserPreferences
  themes!: Theme[]
  initialThemeName!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private themeService: ThemeService,  public dialogRef: MatDialogRef<UpdateUserPreferencesModalComponent>) { }

  ngOnInit() {
    this.userPreferences = this.data.userPreferences == null ? { themeName: "default"} : this.data.userPreferences;
    this.initialThemeName = this.userPreferences.themeName;
    this.themes = this.data.themes
  }

  cancel(): void {
    this.userPreferences.themeName = this.initialThemeName;
    this.themeService.loadTheme(this.initialThemeName);
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.userPreferences);
  }

  // Set the theme by adding the theme class to the body
  changeTheme(event: any) {
    this.themeService.loadTheme(event.name);
    this.userPreferences.themeName = event.name;
  }
}
