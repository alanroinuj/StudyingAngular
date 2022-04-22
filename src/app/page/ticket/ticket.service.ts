import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject } from 'rxjs';
import { ITicket } from './../../utils/models/ticket.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: ITicket;

  private readonly API = `${environment.API}tickets`;
  showMessage: any;

  private _ticketData = new BehaviorSubject<ITicket>({
    id: null || 0,
    description: "",
  })

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  get ticketData(): ITicket{
    return this._ticketData.value;
  }

  set ticketData(tickets: ITicket){
    this._ticketData.next(tickets);
  }

  showToast(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ["msgErrorSb"] : ["msgSucessSb"]
    });
  }

  createTicket(ticket: ITicket): Observable<ITicket>{
    return this.http.post<ITicket>(this.API, ticket)
  }

  readTicket(): Observable<ITicket[]>{
    return this.http.get<ITicket[]>(this.API);
  }

  readByIdTicket(id: any): Observable<ITicket>{
    const url = `${this.API}/${id}`;
    return this.http.get<ITicket>(url);
  }

  updateTicket(ticket: ITicket): Observable<ITicket>{
    const url = `${this.API}/${ticket.id}`;
    return this.http.put<ITicket>(url, ticket);
  }

  deleteTicket(id: any): Observable<ITicket>{
    const url= `${this.API}/${id}`;
    return this.http.delete<ITicket>(url);
  }

}
