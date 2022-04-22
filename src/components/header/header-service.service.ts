import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IButton{
  id?: string,
  disable: boolean
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _button = new BehaviorSubject<IButton>({
    id: '',
    disable: false
  })

  constructor() { }

  get buttonEnable(): IButton{
    return this._button.value;
  }

  set buttonEnable(buttonEnable: IButton){
    this._button.next(buttonEnable);
  }

}
