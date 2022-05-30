import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { SharedModule } from 'src/components/shared.module';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    SharedModule,
    MatDialogModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeModule { }
