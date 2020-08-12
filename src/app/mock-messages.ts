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

import { Message } from './message';

export const MESSAGES: Message[] = [
  new Message("This is a conversation"),
  new Message("Hello"),
  new Message("Hi"),
  new Message("How are you?"),
  new Message("Fine thanks and you?"),
  new Message("Fine"),
  new Message("I think the message box should show a vertical scrollbar"),
  new Message("Yes, that's in case we write enough messages to overflow the capacity"),
  new Message("Oh, really, let's try"),
  new Message("Yes, let's"),
  new Message("It happend, didn't it!")
];
