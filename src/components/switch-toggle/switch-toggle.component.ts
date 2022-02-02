import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'switch-component',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.scss']
})
export class SwitchToggleComponent implements OnInit {
  @Input() label?: string;
  @Input() isChecked: boolean = true;

  @ViewChild('teste') teste!:ElementRef;


  constructor() { }

  ngOnInit(): void {

  }

  onChange(event: any){
    this.isChecked = event.target.checked;
    this.teste.nativeElement.classList.toggle("teste");
    console.log(this.isChecked);
  }

}
