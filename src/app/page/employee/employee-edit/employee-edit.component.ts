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

  form: FormGroup;
  fileSelected: Blob;
  imageUrl: string;
  base64: string;

  constructor(
    private sidebarService: SidebarService,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private sant: DomSanitizer
    ) {
    this.sidebarService.titleHeader = {
      title: 'Cadastro de usuário',
      routerUrl: '/employees/create',
    };
   }

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
