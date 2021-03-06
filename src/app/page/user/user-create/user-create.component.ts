import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './../../../utils/models/user.model';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    passConfirm: '',
    active: true,
    dateAtCreate: ''
  };


  constructor(
    private userService: UserService,
    private sidebarService: SidebarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sidebarService.titleHeader = {
      title: 'Cadastro de usuário',
      routerUrl: '/users/create',
    };
  }

  ngOnInit(): void {
    this.user.dateAtCreate = Date.now();
    const id = this.route.snapshot.paramMap.get('id');
    //verifica se tem ID antes de carregar a tela
    if(id){
      this.userService.readByIdUser(id).subscribe((user) => {
        this.user = user;
      });
    }
  }

  onSubmit(form: any) {
    console.log(form);
  }

  userSubmit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.userService.readByIdUser(id).subscribe((user) => {
        this.user = user;
      });
      this.updateUser();
    }else{
      this.createUser();
    }
  }


  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.userService.showToast('Salvo com Sucesso!');
      this.router.navigate(['/users']);
    });
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.userService.showToast('Usuário alterado com Sucesso!');
      this.router.navigate(['/users']);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
