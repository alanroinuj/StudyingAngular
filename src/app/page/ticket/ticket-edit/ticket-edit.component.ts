import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from './../ticket.service';
import { HeaderService } from './../../../../components/header/header-service.service';
import { ITicket } from './../../../utils/models/ticket.models';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/components/sidebar/sidebar.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  id: any;
  tickets: ITicket;
  retorno: any;

  constructor(
    private sidebarService: SidebarService,
    private headerService: HeaderService,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.readIdTicket();
    this.headerService.buttonEnable.disable = false;

  }

  readIdTicket(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.ticketService.readByIdTicket(this.id).subscribe((ticket) =>{
      this.tickets = ticket;
      this.sidebarService.titleHeader = {
        title: `${this.tickets.description}#${this.tickets.id}`,
        routerUrl: "/tickets"
      }
      this.ticketService.ticketData.id = this.tickets.id;
    });
  }
}
