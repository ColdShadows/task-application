import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Theme } from './theme.model'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('ocean-blue'); // Default theme
  currentTheme = this.themeSubject.asObservable();

  private themesSubject = new BehaviorSubject<Theme[]>([]); // Default theme
  themes = this.themesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getThemes(){
    this.http.get(`/assets/themes.json`).subscribe((themesJson: any) => {
      if (themesJson) {
        let stuff : Theme[] = Object.entries(themesJson).map(([name, details]) => {
          const t = details as Theme;
          return { name: name, primary: t.primary, secondary: t.secondary, background: t.background, text: t.text };
        });
        this.themesSubject.next(stuff);
      }
    });    
  }



  // Load the theme from the JSON file
  loadTheme(themeName: string) {
    this.http.get(`/assets/themes.json`).subscribe((themes: any) => {
      const theme = themes[themeName];
      if (theme) {
        this.applyTheme(theme);
        this.themeSubject.next(themeName);
      }
    });
  }

  private applyTheme(theme: any) {
    // Apply the theme colors dynamically as CSS variables
    for (const key in theme) {
      if (theme.hasOwnProperty(key)) {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      }
    }
  }
}
