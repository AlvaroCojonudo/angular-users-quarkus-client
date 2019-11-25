import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "127.0.0.1:8080/users"
  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get(this.url);
  }

}
