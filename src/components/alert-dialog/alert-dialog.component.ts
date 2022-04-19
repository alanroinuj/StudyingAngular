import { User } from './../../app/utils/models/user.model';
import { UserService } from './../../app/page/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'alertDialogComponent',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  user?: User;

  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  ngOnInit(): void {

    console.log(this.userId);
  }

  get userId(): number{
    return this.userService.userId.id;
  }

  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe(() => {
      this.location.historyGo();
      this.userService.showToast('Exclusão Realizado!');
    });
  }

}
