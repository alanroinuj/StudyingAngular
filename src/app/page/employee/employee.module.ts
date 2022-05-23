import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';



@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
