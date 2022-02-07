import { Router } from '@angular/router';
import { SidebarService } from './../../../../components/sidebar/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {

  constructor(private sidebar: SidebarService, private router: Router) {
    this.sidebar.titleHeader = {
      title: 'Novo Chamado',
      routerUrl: '/tickets/create'
    }
   }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/tickets']);
  }

}
