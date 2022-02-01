import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { IUser } from './../../utils/models/user.model';

import {  Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = `${environment.API}users`
  showMessage: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showToast(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ["msgErrorSb"] : ["msgSucessSb"]
    });
  }

  createUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.API, user).pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    );
  }

  handlerError(e: any): Observable<any>{
    this.showMessage('Ocorreu um Erro!', true)
    return EMPTY;
  }

  readUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.API);
  }

  readByIdUser(id: any): Observable<IUser>{
    const url = `${this.API}/${id}`;
    return this.http.get<IUser>(url);
  }

  updateUser(user: IUser): Observable<IUser>{
    const url = `${this.API}/${user.id}`;
    return this.http.put<IUser>(url, user);
  }
  deleteUser(id: any): Observable<IUser>{
    const url = `${this.API}/${id}`;
    return this.http.delete<IUser>(url);
  }
}
