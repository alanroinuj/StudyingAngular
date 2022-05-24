import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { SharedModule } from 'src/components/shared.module';

import {IvyCarouselModule} from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    SharedModule
  ]
})
export class EmployeeModule { }
