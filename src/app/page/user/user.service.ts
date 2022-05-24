import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { User } from './../../utils/models/user.model';

import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _userId = new BehaviorSubject<User>({
    id: 0
  })

  private readonly API = `${environment.API}users`
  showMessage: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  get userId(): User{
    return this._userId.value;
  }

  set userId(userId: User){
    this._userId.next(userId);
  }

  showToast(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ["msgErrorSb"] : ["msgSucessSb"]
    });
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.API, user)
     .pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    )
  }

  handlerError(e: any): Observable<any>{
    this.showMessage('Ocorreu um Erro!', true)
    return EMPTY;
  }

  readUser(): Observable<User[]>{
    return this.http.get<User[]>(this.API);
  }

  readByIdUser(id: any): Observable<User>{
    const url = `${this.API}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<User>{
    const url = `${this.API}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: any): Observable<User>{
    const url = `${this.API}/${id}`;
    return this.http.delete<User>(url);
  }
}
