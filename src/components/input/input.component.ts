import { Component, Input, ContentChild, forwardRef } from '@angular/core';
import { NgModel, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],

  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef (() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  jsonString?: string;
  parseError?: boolean;
  private data: any;
  input: any;

  @Input() focused?: boolean;
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() type?: "text"| "password" | "checkbox";

  @ContentChild(NgModel) model?: NgModel;

  constructor() { }

  onBlur(event: any){
    const value = event.target.value;

    if(!value){
      this.focused = false;
    }
  }


  onTouch: any = () => {}
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  writeValue(obj: any) {
      if(obj !== undefined){
        this.data = obj;
        this.jsonString = JSON.stringify(this.data, undefined);
      }
  }

  onChange(event: any) {

    // get value from text area
    let newValue = event.target.value;

    try {
        // parse it to json
        this.data = JSON.parse(newValue);
        this.parseError = false;
    } catch (ex) {
        // set parse error if it fails
        this.parseError = true;
    }

    // update the form
    this.propagateChange(this.data);
  }

  private propagateChange = (_: any) => { };

  /*ngAfterContentInit(){
    this.input = this.model;
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel');
    }
  }*/

}
