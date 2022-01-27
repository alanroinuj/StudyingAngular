import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser } from './../../../utils/models/user.model';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { UserService } from '../user.service';
import { InputComponent } from 'src/components/input/input.component';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {


  user: IUser = {
    name: '',
    email: '',
    password: '',
    passConfirm: '',
    active: true
  }

  constructor(
    private userService: UserService,
    private sidebarService: SidebarService,
    private router: Router
  ) {
    this.sidebarService.titleHeader = {
      title: 'Cadastro de usuário',
      routerUrl: '/users/create',
    };
  }

  ngOnInit(): void { }

  onSubmit(form: any){
    console.log(form);
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.userService.showToast('Salvo com Sucesso!');
      this.router.navigate(['/users']);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
