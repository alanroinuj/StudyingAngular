import { TicketService } from './../../app/page/ticket/ticket.service';
import { HeaderService } from './header-service.service';
import { SidebarService } from 'src/components/sidebar/sidebar.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isEnable: boolean = false;
  @Input() id:string;

  idSearchHeader: string;

  constructor(
    private router: Router,
    private sidebar: SidebarService,
    private headerService: HeaderService,
    private ticketService: TicketService) {
  }

  get idTicket() :any{
    return this.ticketService.ticketData.id;
  }

  ngOnInit(): void {
  }


  navegateTicketCreate() {
    this.router.navigate([`${this.sidebar.titleHeader.routerUrl}/create`]);
  }

  get btnReply(): boolean{
    return this.headerService.buttonEnable.disable;
  }



}
