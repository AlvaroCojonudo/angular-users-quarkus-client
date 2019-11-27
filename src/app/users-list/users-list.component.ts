import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  user: User = {name: "", surname: "", birth: "", username: ""};
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  deleteUser(user: User){
    this.userService.deleteUser(user).subscribe(users => this.users = users);
  }

  addUser(user: User){
    console.log(user);
    this.userService.addUser(user).subscribe(users => this.users = users);
  }
}
