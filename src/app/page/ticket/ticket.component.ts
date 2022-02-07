import { TicketService } from './ticket.service';
import { ITicket } from './../../utils/models/ticket.models';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/components/sidebar/sidebar.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  tickets?: ITicket[];

  prioridades: string [] = ["Baixa", "Média", "Alta", "Urgente"];

  constructor(private sidebarSidebar: SidebarService, private ticketService: TicketService) {
    this.sidebarSidebar.titleHeader = {
      title: 'Chamados',
      routerUrl: '/tickets'
    }
  }

  ngOnInit(): void {
    this.ticketService.readTicket().subscribe((tickets) => {
      this.tickets = tickets;
      console.log(tickets);
    })
  }

}
