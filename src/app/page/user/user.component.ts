import { IUser } from './../../utils/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users?: IUser[];
  active?: boolean;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userService: UserService
  ) {
    this.sidebarService.titleHeader = {
      title: 'Usuários',
      routerUrl: '/users',
    };
  }


  ngOnInit(): void {
    this.userService.readUser().subscribe(users =>{
      this.users = users;
      console.log(users);

    });
  }

  isStatusActive(user: IUser){
    return user.active? 'Ativo' : 'Inativo';
  }

  navegateToUserCreate() {
    this.router.navigate(['/users/create']);
  }
}
