import { User } from './../../utils/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AlertDialogComponent } from 'src/components/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users?: User[];
  active?: boolean;
  user?: User;


  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userService: UserService,
    private location: Location,
    public dialog: MatDialog,
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
  isStatusActive(user: User) {
    return user.active ? 'Ativo' : 'Inativo';
  }

  navegateToUserCreate() {
    this.router.navigate(['/users/create']);
  }

  doubleClick(user: User) {
    this.router.navigate([`update/${user.id}`]);
  }

  showAlertDialog(user: User){
    this.userService.userId.id = user.id;
    this.dialog.open(AlertDialogComponent);

  }
}
