import { ITitle } from './../../app/utils/models/title.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

    private _title = new BehaviorSubject<ITitle>({
    title: 'Dasboard',
    routerUrl: ''
  })

  constructor() { }

  get titleHeader(): ITitle{
    return this._title.value;
  }

  set titleHeader(titleHeader: ITitle){
    this._title.next(titleHeader);
  }

}
