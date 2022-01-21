import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/components/sidebar/sidebar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private sidebarService: SidebarService) {
    this.sidebarService.titleHeader = {
      title: 'Usuários',
      routerUrl: '/users'
    }
  }

  ngOnInit(): void {
  }

  navegateToUserCreate(){
    this.router.navigate(['/users/create']);
  }

}
