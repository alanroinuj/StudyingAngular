import { IUser } from './../../utils/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3001/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showToast(msg: string): void{
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ["customSnackBar"]
    })
  }

  createUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.baseUrl, user)
  }
}
