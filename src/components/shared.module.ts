import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InputComponent } from './input/input.component'


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    InputComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
