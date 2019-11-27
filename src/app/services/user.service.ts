import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8080/users"
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<User[]>(this.url, httpOptions);
  }

  deleteUser(user1: User): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), body: {
        name: user1.name,
        surname: user1.surname,
        birth: user1.birth,
        username: user1.username
      }
    };
    return this.http.delete<User[]>(this.url, httpOptions);
  }

  addUser(user2: User): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), body: {
        name: user2.name,
        surname: user2.surname,
        birth: user2.birth,
        username: user2.username
      }
    };
    return this.http.post<User[]>(this.url, httpOptions);
  }
}
