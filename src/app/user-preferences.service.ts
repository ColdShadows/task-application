import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPreferences } from './user-preferences.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  constructor(private http: HttpClient) { }

  getUserPreferences() : Observable<UserPreferences[]> {
    var stuff = this.http.get<UserPreferences[]>(environment.apiUri + "/userPreferences");
    return stuff;
  }

  createUserPreferences(userPreferences : UserPreferences) : Observable<UserPreferences> {
    var stuff = this.http.post<UserPreferences>(environment.apiUri + "/userPreferences", userPreferences);
    return stuff;
  }

  updateUserPreferences(userTask : UserPreferences) : Observable<UserPreferences> {
    var stuff = this.http.put<UserPreferences>(environment.apiUri + "/userPreferences/" + userTask.id, userTask);
    return stuff;
  }
}
