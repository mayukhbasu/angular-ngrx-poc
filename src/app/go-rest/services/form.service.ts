import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/create.user.interface';
import { PersonResponse } from '../models/response.user.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  createUser(user: Person): Observable<PersonResponse> {
    return this.http.post<PersonResponse>(environment.goRestUrl+"/users", user)
  }

  getPerson(): Observable<PersonResponse[]> {
    return this.http.get<PersonResponse[]>(environment.goRestUrl+"/users")
  }
}
