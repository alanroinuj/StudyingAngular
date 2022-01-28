import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],

  providers: [INPUT_FIELD_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor {
  @Input() focused?: boolean;
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() type?: 'text' | 'password' | 'checkbox' | 'email';
  @Input() control?: any;

  private innerValue: any;
  get value() {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb!: (_: any) => {};

  //Escuta o valor do campo de input
  writeValue(v: any) {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
}
