import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  //adicionando classe CSS na tag da DOM  e ao Template com ViewChild
  @ViewChild('isActive') isActive!:ElementRef;

  constructor() {

  }

  openMenu(){
    this.isActive.nativeElement.classList.toggle("isActive");
  }

  ngOnInit(): void {

  }

}
