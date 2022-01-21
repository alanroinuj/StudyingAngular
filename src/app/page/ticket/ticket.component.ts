import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/components/sidebar/sidebar.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  prioridades: string [] = ["Baixa", "Média", "Alta", "Urgente"];

  constructor(private sidebarSidebar: SidebarService) {
    this.sidebarSidebar.titleHeader = {
      title: 'Chamados',
      routerUrl: '/tickets'
    }
  }

  ngOnInit(): void {
  }

}
