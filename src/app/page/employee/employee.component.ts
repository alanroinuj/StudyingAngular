import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { EmployeeService } from './employee.service';
import { Employee } from 'src/app/utils/models/employee';
import { Photo } from 'src/app/utils/models/photo';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[];
  photo: Photo;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private employeeService: EmployeeService
  ) {
    this.sidebarService.titleHeader = {
      title: 'Funcionários',
      routerUrl: '/employees',
    };
    }

  ngOnInit(){
    this.getEmployee();
    this.getPhoto();
    /*this.images = [
      {path: '../../../assets/img/Capturar.PNG'},
      {path: '../../../assets/img/corvo.PNG'},
      {path: '../../../assets/img/logo.png'}
    ]*/

  }

  getEmployee(){
    this.employeeService.readEmployee().subscribe((employee: Employee[]) => {
      this.employee = employee;
    });
  }

  getPhoto(){
    this.employeeService.readPhoto().subscribe((result) =>{
      this.photo = result;
      console.log(this.photo)
    })
  }

}
