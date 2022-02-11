import { TicketService } from './ticket.service';
import { ITicket } from './../../utils/models/ticket.models';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from 'src/components/sidebar/sidebar.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  tickets?: ITicket[];
  prioritiesData?: ITicket;


  @ViewChild('activeList') isActiveList!: ElementRef;
  @ViewChild('activeListStatus') isActiveListStatus!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('teste') teste!: ElementRef;

  priorities: string [] = ["Baixa", "Média", "Alta", "Urgente"];
  listStatus: string [] = ["Aberto", "Aguardando Cliente", "Aguardando Terceiro", "Em andamento", "Resolvido", "Fechado"];

  constructor(
    private sidebarSidebar: SidebarService,
    private ticketService: TicketService) {

    this.sidebarSidebar.titleHeader = {
      title: 'Chamados',
      routerUrl: '/tickets'
    }

  }

  dropdownPriority(){
    this.isActiveList.nativeElement.classList.toggle("activeList");
  }
  dropdownStatus(){
    this.isActiveListStatus.nativeElement.classList.toggle("activeListStatus");;
  }


  ngOnInit(): void {
    this.ticketService.readTicket().subscribe((tickets) => {
      this.tickets = tickets;
      console.log(tickets);
      console.log(this.priorities);
    });
  }

}
