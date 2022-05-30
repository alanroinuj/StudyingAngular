import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './page/user/user.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { UserCreateComponent } from './page/user/user-create/user-create.component';
import { TicketCreateComponent } from './page/ticket/ticket-create/ticket-create.component';
import { TicketEditComponent } from './page/ticket/ticket-edit/ticket-edit.component';
import { EmployeeEditComponent } from './page/employee/employee-edit/employee-edit.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { AuthGuardService } from './page/login/security/authguard.service';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
  { path: 'login', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)},
  { path: 'employees', component: EmployeeComponent},
  { path: 'employees/create', component: EmployeeEditComponent},
  { path: 'employees/:id', component: EmployeeEditComponent},
  { path: 'tickets', component: TicketComponent },
  { path: 'tickets/create', component: TicketCreateComponent },
  { path: 'tickets/:id', component: TicketEditComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/update/:id', component: UserCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
