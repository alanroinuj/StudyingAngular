import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/components/sidebar/sidebar.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.sidebarService.titleHeader = {
      title: 'Chamados',
      routerUrl: '/tickets'
    }
  }

}
