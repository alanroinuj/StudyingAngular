import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/utils/models/employee';
import { Photo } from 'src/app/utils/models/photo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly API = `${environment.API}`

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) { }

    showToast(msg: string, isError: boolean = false): void{
      this.snackBar.open(msg, '',{
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
        panelClass: isError ? ["msgErrorSb"] : ["msgSucessSb"]
      });
    }

    createEmployee(employee: any): Observable<any>{
      return this.http.post(`${this.API}employee`, employee);
    }

    putEmployee(employee: any): Observable<any>{
      return this.http.put(`${this.API}employee/${employee.id}`, employee).pipe(take(1));
    }

    readEmployee(): Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.API}employee`);
    }

    readByIdEmployee(id: number): Observable<any>{
      return this.http.get(`${this.API}employee/${id}`);
    }

    readPhoto(): Observable<Photo>{
      return this.http.get<Photo>(`${this.API}photos`);
    }

}
