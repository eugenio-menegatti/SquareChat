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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MessageBoxComponent,
    InputBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
