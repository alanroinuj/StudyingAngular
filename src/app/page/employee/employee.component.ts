import { Employee } from './../../utils/models/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.createForm(new Employee);
  }

  createForm(employee: Employee) {
    this.form = this.formBuilder.group({
      name: [(employee.name)],
      department: [(employee.department)],
      phone: [(employee.phone)],
      active: [(employee.active)]
    })
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
