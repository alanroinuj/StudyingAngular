import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { NgxDropzoneModule } from 'ngx-dropzone';


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
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component'


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    InputComponent,
    SwitchToggleComponent,
    TooltipComponent,
    AlertDialogComponent,
    UploadPhotoComponent,
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
    NgxMaskModule.forChild(),
    NgxDropzoneModule
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
