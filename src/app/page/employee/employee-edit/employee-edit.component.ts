import { Observable, Subscriber } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/utils/models/employee';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { EmployeeService } from '../employee.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee;
  isAddMode!: boolean;
  form: FormGroup;
  isEditMode: boolean = true;

  imgbase64: Observable<any>;

  id: number;

  constructor(
    private sidebarService: SidebarService,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private routeActivated: ActivatedRoute,
    private sant: DomSanitizer,
    private dialog: MatDialog
    ) {
    this.sidebarService.titleHeader = {
      title: 'Cadastro de usuário',
      routerUrl: '/employees/create',
    };
   }

  ngOnInit(){
    this.createForm(new Employee);
    this.id = this.routeActivated.snapshot.params['id'];
    this.isAddMode = !this.id;


    if(!this.isAddMode){
      return this.employeeService.readByIdEmployee(this.id).subscribe(x =>{
        this.form.patchValue(x);
      })
    }
  }

  openModal(){
    this.dialog.open(UploadPhotoComponent, {
      height: '250px',
      width: '600px'
    })
  }

  createForm(employee: Employee) {
    this.form = this.formBuilder.group({
      id: [(employee.id)],
      name: [employee.name],
      department: [(employee.department)],
      phone: [(employee.phone)],
      active: [(employee.active)]
    })
  }


  onSubmit(){
    this.id = this.id = this.routeActivated.snapshot.params['id'];
    if(this.id){
      this.updateEmployee();
    }else{
      this.createEmployee();
    }

  }

  createEmployee(){
    this.employeeService.createEmployee(this.form.value).subscribe(() => {
      this.employeeService.showToast('Salvo!');
      this.router.navigate(['employees']);
    });
  }

  updateEmployee(){
    this.employeeService.putEmployee(this.form.value).subscribe(() => {
      this.employeeService.showToast('Atualizado!');
      this.router.navigate(['employees']);
    });
  }

  onChange(ev: Event){
    const file = (ev.target as HTMLInputElement).files![0];
    this.convertBaseTo64(file);
  }

  convertBaseTo64(file: File){
    this.imgbase64 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    this.imgbase64.subscribe((data) => {
      console.log(data);
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }
}
