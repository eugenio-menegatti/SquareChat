/*
SquareChat - a demo chat app in Angular
Angular license and copyright: https://angular.io/license

SquareChat Copyright 2020 Eugenio Menegatti
myindievg@gmail.com
	 This file is part of SquareChat.
	 The file LICENSE describes the terms under which SquareChat is distributed.
   SquareChat is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   SquareChat is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   You should have received a copy of the GNU General Public License
   along with SquareChat.  If not, see <http://www.gnu.org/licenses/>.
*/

import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  selectedUser: User = undefined;

  // https://www.digitalocean.com/community/tutorials/angular-component-communication
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();
  emitData(data) {
    this.observer.next(data);
  }



  constructor() {
    this.init();
  }

  init(): void {
    this.getUsers().subscribe(users => this.users = users);
    this.selectedUser = this.users[0];
    console.log("selectedUser: " + this.selectedUser);
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  /*getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }*/

  getSelectedUser(): Observable<User> {
    return of(this.selectedUser);
  }

  setSelectedUser(user: User): void {
    this.selectedUser = user;
    this.emitData(this.selectedUser);
  }

}
