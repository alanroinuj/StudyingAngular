import { IUser } from './../../utils/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users?: IUser[];
  active?: boolean;
  user?: IUser;


  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userService: UserService,
    private location: Location
  ) {
    this.sidebarService.titleHeader = {
      title: 'Usuários',
      routerUrl: '/users',
    };
  }

  ngOnInit(): void {

        this.userService.readUser().subscribe((users) => {
        this.users = users;
        console.log(users);
      });
  }

  //Altera boolean na tabela para string;
  isStatusActive(user: IUser) {
    return user.active ? 'Ativo' : 'Inativo';
  }

  navegateToUserCreate() {
    this.router.navigate(['/users/create']);
  }

  doubleClick(user: IUser) {
    this.router.navigate([`update/${user.id}`]);
  }

  deleteUser(user: IUser) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.location.historyGo();
      this.userService.showToast('Exclusão Realizado!');
    });
  }
}
