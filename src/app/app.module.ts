import { CanActivate } from '@angular/Router';
import { EmployeeModule } from './page/employee/employee.module';
import { TicketCreateComponent } from './page/ticket/ticket-create/ticket-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/components/shared.module';

import { AppComponent } from './app.component';
import { UserComponent } from './page/user/user.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { UserCreateComponent } from './page/user/user-create/user-create.component';
import { TicketEditComponent } from './page/ticket/ticket-edit/ticket-edit.component';
import { HighlightMouseDirective } from './page/ticket/highlight-mouse.directive';
import { AuthGuardService } from './page/login/security/authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TicketComponent,
    UserCreateComponent,
    TicketCreateComponent,
    TicketEditComponent,
    HighlightMouseDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EmployeeModule
  ],
  exports:[
    UserComponent
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
