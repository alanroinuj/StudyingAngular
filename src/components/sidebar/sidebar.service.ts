import { Title } from './../../app/utils/models/title.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

    private _title = new BehaviorSubject<Title>({
    title: 'Dashboard',
    routerUrl: ''
  })

  constructor() { }

  get titleHeader(): Title{
    return this._title.value;
  }

  set titleHeader(titleHeader: Title){
    this._title.next(titleHeader);
  }

}
