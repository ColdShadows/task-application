import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<User> {
    // var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNnMGxrWVF4OVlITkJRQXRuVk1OZiJ9.eyJnaXZlbl9uYW1lIjoidGtlYW4wMDEiLCJmYW1pbHlfbmFtZSI6IldpbG11Iiwibmlja25hbWUiOiJ0a2VhbjAwMXdpbG11IiwibmFtZSI6InRrZWFuMDAxIFdpbG11IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0thWEtyWTd3NWJjSGU1UXdkY0U0Y0xzc0JyMnM1WjFIeFZBbTByY0ZlUDBhS1BXdz1zOTYtYyIsInVwZGF0ZWRfYXQiOiIyMDI0LTEyLTAxVDIyOjA0OjQxLjYyMFoiLCJlbWFpbCI6InRrZWFuMDAxd2lsbXVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LTF5dHFmcmkxNGk0enY2em0udXMuYXV0aDAuY29tLyIsImF1ZCI6IjExZmxzVWI2WG05M3RIWk9FaEVvVENreG1MZllERkU2IiwiaWF0IjoxNzMzMDkwNjg4LCJleHAiOjE3MzMxMjY2ODgsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEzNzc5NDA4NTc4MDcxMjk0Nzc1Iiwic2lkIjoicUstTTAwSjJKX2NLaVpuRklaS1FKd0NnQjNLWnY1a3ciLCJub25jZSI6Ik1HeHZkR295U1hKRk5FSlphVVZ5U0VkTE5XRmFTV1o1TUd3MmF6bFRWMUYwUzJkWVoxTmFSRWQxUmc9PSJ9.L_gw7l-_6KQCFjC6DwPfP3IRrWogOjV3eHWlGC4Aou1tmvRL9kqEZ6ecxmSux6aNK1-g-ICHc6Nsd-FNxr4CVNVTnqYb8IKvgi99VwmAVBccoH6DHY-YI5uIzsSf1tJiI4j3rIDnMz1rZxTSevWiBH6YMEO4xdrOV8p5ahtaveBH0K5QJo3fw6yxixOGzNtMlp5JozWJocWWFPFWRUGRyaUGbk5NZA99BnORG_ix9xqEf6w0dywOnm2FseCgbD-1FZf_D82D4JxSCbw8wqsOumtuz5u0DvLHsSYisW8ffsZotmRPB8o8yIGm_WKSQ8zqQ3bMHtNkP6-VrVJeBu109w";
    // var headers = new HttpHeaders().set("Authorization", "Bearer " + token );
    // var stuff = this.http.get<User>(environment.apiUri + "/users", { headers : headers });
    return this.http.get<User>(environment.apiUri + "/users");
  }

  createUser(user: User) : Observable<User> {
    var stuff = this.http.post<User>(environment.apiUri + "/users", user);
    return stuff;
  }
}
