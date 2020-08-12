import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  selectedUser : User = undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.selectedUser = this.users[0];
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  onSelect(user: User): void {
    // https://angular.io/guide/component-interaction
    // https://medium.com/@halleshwar141/component-interaction-in-angular-4644b3180c6e
    // https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/
    // https://angular.io/guide/observables
    this.selectedUser = user;
    this.userService.setSelectedUser(user);
    console.log("pippo");
  }
}
