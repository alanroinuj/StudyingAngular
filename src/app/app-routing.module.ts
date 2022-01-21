import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { UserCreateComponent } from './page/user/user-create/user-create.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
  },
  {
    path: "tickets",
    component: TicketComponent
  },
  {
    path: "users",
    component: UserComponent
  },
  {
    path: "users/create",
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
