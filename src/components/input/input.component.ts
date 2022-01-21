import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  focused?: boolean;


  @Input() label?: string;
  @Input() type?: "text"| "password" | "checkbox";


  constructor() { }

  onBlur(event: any){
    const value = event.target.value;

    if(!value){
      this.focused = false;
    }
  }

}
