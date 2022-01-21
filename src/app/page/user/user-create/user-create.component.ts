import { IUser } from './../../../utils/models/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { UserService } from '../user.service';

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

  ngOnInit(): void {}

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
