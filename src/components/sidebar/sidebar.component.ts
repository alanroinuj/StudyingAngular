import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 btn = document.querySelector('#btn');
  constructor() { }

  ngOnInit(): void {
  }

}
