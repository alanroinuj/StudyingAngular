import { TicketCreateComponent } from './page/ticket/ticket-create/ticket-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/components/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { UserCreateComponent } from './page/user/user-create/user-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TicketComponent,
    UserCreateComponent,
    TicketCreateComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
