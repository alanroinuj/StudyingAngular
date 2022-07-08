import { SidebarService } from './sidebar.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SessionService } from 'src/app/shared/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //adicionando classe CSS na tag da DOM  e ao Template com ViewChild
  @ViewChild('isActive') isActive!:ElementRef;

  constructor(
    private sidebarService: SidebarService,
    private sessionService: SessionService,
    private router: Router) {

  }

  openMenu(){
    this.isActive.nativeElement.classList.toggle("isActive");
  }

  ngOnInit(): void {

  }

  //Altera o titulo do cabelho conforme a rota
  get title(): string{
    return this.sidebarService.titleHeader.title;
  }

  get routerUrl(): string{
    return this.sidebarService.titleHeader.routerUrl;
  }


  logout(){
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }

}
