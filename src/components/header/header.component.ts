import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private sidebar: SidebarService) {
  }

  ngOnInit(): void {
  }


  navegateTicketCreate() {
    this.router.navigate([`${this.sidebar.titleHeader.routerUrl}/create`]);
  }
}
