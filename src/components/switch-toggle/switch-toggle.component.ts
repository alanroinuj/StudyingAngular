import { Component, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchToggleComponent),
  multi: true
}

@Component({
  selector: 'switch-component',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.scss'],
  providers: [INPUT_FIELD_ACCESSOR]
})
export class SwitchToggleComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() isChecked: boolean = true;
  @ViewChild('displayLabel') displayLabel!:ElementRef;

  private innerValue: any;
  get value(){
    return this.innerValue;
  }

  set value(v: any) {
    if(v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb!: (_: any) => {};

  writeValue(v: any){
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  onChange(event: any){
    this.isChecked = event.target.checked;
    this.displayLabel.nativeElement.classList.toggle("displayLabel");
    console.log(this.isChecked);
  }

}
