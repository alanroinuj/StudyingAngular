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

  tickets!: ITicket[];
  prioritiesData!: ITicket;


  @ViewChild('activeList') isActiveList!: ElementRef;
  @ViewChild('activeListStatus') isActiveListStatus!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('teste') teste!: ElementRef;

  listpriorities: string [] = ["Baixa", "Média", "Alta", "Urgente"];
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
    });
  }

  //Ao selecionar alguma opção do menu de propriedda, o metodo vai fazer um get no backend e atualiza o dado da tabela
  selectPriority(ticket: ITicket, propriedade: string){
    const baixa = this.listpriorities[0];
    const media = this.listpriorities[1];
    const alta = this.listpriorities[2];
    const urgente = this.listpriorities[3];
    //se a propriedade for igual a string informada, irá fazer um get, para receber o campo priority para receber o valor da const, e atualizar no banco de dados
    if(propriedade == 'Baixa'){
      this.ticketService.readByIdTicket(ticket.id).subscribe((result) =>{
        result.priority = baixa;
        this.ticketService.updateTicket(result).subscribe(() =>{
          this.ticketService.showToast('Ticket atualizado!');
          this.ngOnInit();
        });
      });
    }else if(propriedade == 'Média'){
      this.ticketService.readByIdTicket(ticket.id).subscribe((result) =>{
        result.priority = media;
        this.ticketService.updateTicket(result).subscribe(() =>{
          this.ticketService.showToast('Ticket atualizado!');
          this.ngOnInit();
        });
      });
    }else if(propriedade == 'Alta'){
      this.ticketService.readByIdTicket(ticket.id).subscribe((result) =>{
        result.priority = alta;
        this.ticketService.updateTicket(result).subscribe(() =>{
          this.ticketService.showToast('Ticket atualizado!');
          this.ngOnInit();
        });
      });
    }else if(propriedade == 'Urgente'){
      this.ticketService.readByIdTicket(ticket.id).subscribe((result) =>{
        result.priority = urgente;
        this.ticketService.updateTicket(result).subscribe(() =>{
          this.ticketService.showToast('Ticket atualizado!');
          this.ngOnInit();
        });
      });
    }
  }

}
