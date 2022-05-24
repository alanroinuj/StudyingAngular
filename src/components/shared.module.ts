import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from './input/input.component';
import { SwitchToggleComponent } from './switch-toggle/switch-toggle.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component'


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    InputComponent,
    SwitchToggleComponent,
    TooltipComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    InputComponent,
    SwitchToggleComponent,
    TooltipComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    AlertDialogComponent
  ]
})
export class SharedModule { }
