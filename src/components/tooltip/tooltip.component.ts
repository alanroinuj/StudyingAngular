import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip-component',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() employeeTicket?: string;
  @Input() messageTicket?: string;
  @Input() dateCreateTicket?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
