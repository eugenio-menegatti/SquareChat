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

import { Component, OnInit, Input} from '@angular/core';
import { Message } from '../message';
import { User } from '../user';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  recipient: User = undefined;
  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private userService: UserService) { }

  ngOnInit() {
    this.getMessages();
    this.getRecipient();
    this.userService.subscriber$.subscribe(data => {
      this.recipient = data as User;
    });
  }

  getMessages(): void {
    this.messageService.getMessages()
    .subscribe(messages => this.messages = messages);
  }

  getRecipient(): void {
    this.userService.getSelectedUser()
      .subscribe(recipient => this.recipient = recipient );
  }



}
