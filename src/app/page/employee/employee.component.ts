import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('menuTrigger') menuTrigger: ElementRef;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private employeeService: EmployeeService,
    private eRef: ElementRef
  ) {
    this.sidebarService.titleHeader = {
      title: 'Funcionários',
      routerUrl: '/employees',
    };
    }

    @HostListener('document: click', ['$event'])
    clickout(event: Event){
      this.eRef.nativeElement.contains(event.target)
      console.log(event.target);
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

  readId(id: number){
    this.employeeService.readByIdEmployee(id).subscribe(() =>{
      this.router.navigate([`employees/${id}`]);
    });

  }

  openMenu(){
    this.menuTrigger.nativeElement.classList.toggle('menuTrigger')
  }

}
