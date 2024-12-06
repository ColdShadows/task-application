import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPreferences } from './user-preferences.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Theme } from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  constructor(private http: HttpClient) { }

  getUserPreferences() : Observable<UserPreferences> {
    return this.http.get<UserPreferences>(environment.apiUri + "/userPreferences");
  }

  createUserPreferences(userPreferences : UserPreferences) : Observable<UserPreferences> {
    return this.http.post<UserPreferences>(environment.apiUri + "/userPreferences", userPreferences);
  }

  updateUserPreferences(userTask : UserPreferences) : Observable<UserPreferences> {
    return this.http.put<UserPreferences>(environment.apiUri + "/userPreferences/" + userTask.id, userTask);
  }
}
