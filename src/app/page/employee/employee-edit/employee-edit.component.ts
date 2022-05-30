import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/utils/models/employee';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { EmployeeService } from '../employee.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee;
  isAddMode!: boolean;
  form: FormGroup;
  fileSelected: Blob;
  imageUrl: string;
  base64: string;

  id: number;

  constructor(
    private sidebarService: SidebarService,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private routeActivated: ActivatedRoute,
    private sant: DomSanitizer
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

  createForm(employee: Employee) {
    this.form = this.formBuilder.group({
      id: [(employee.id)],
      name: [(employee.name)],
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

  inputFile(event: Event):void{
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.fileSelected = files[0];
    this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;

  }

  convertBase64(){
    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
    }
  }
}
