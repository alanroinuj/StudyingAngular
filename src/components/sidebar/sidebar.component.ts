import { SidebarService } from './sidebar.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //adicionando classe CSS na tag da DOM  e ao Template com ViewChild
  @ViewChild('isActive') isActive!:ElementRef;

  constructor(private sidebarService: SidebarService) {

  }

  openMenu(){
    this.isActive.nativeElement.classList.toggle("isActive");
  }

  ngOnInit(): void {

  }

  get title(): string{
    return this.sidebarService.titleHeader.title;
  }

  get routerUrl(): string{
    return this.sidebarService.titleHeader.routerUrl;
  }

}
