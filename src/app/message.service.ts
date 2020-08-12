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
import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message [] = [];

  constructor() {
    this.init();
  }

  init(): void {
    /*for (let i: number = 0; i < 30; i++) {
      let msg: string = "messaggio numero " + i;
      this.messages.push(new Message(msg));
    }*/
    this.messages = MESSAGES;
  }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  getMessage(id: number): Observable<Message> {
    let aMessage: Message = new Message("test message");
    return of(aMessage);
  }

}
