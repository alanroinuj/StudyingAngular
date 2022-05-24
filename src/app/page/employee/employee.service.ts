import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/utils/models/employee';
import { Photo } from 'src/app/utils/models/photo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly API = `${environment.API}`

  constructor(
    private http: HttpClient
    ) { }

    readEmployee(): Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.API}employee`);
    }

    readPhoto(): Observable<Photo>{
      return this.http.get<Photo>(`${this.API}photos`);
    }

}
