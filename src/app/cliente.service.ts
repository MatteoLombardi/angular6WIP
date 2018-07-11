import { Injectable } from '@angular/core';
     
import { Observable, of } from 'rxjs';
 
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessaggioService } from './messaggio.service';
import { catchError, map, tap } from 'rxjs/operators';
 
@Injectable({ providedIn: 'root' })
export class ClienteService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private messaggioService: MessaggioService,
    private http: HttpClient
  ) { }
 
  private log(messaggio:string){
    this.messaggioService.add(`ClienteService: ` + messaggio);
  }

  private urlClienti = 'api/clienti';

  
  getClienti(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlClienti)
    .pipe(
      tap(clienti => this.log(`ottenuti clienti`)),
      catchError(this.handleError('getClienti', []))
    );
  }
 
  getCliente(id: number): Observable<Cliente> {
    const url = `${this.urlClienti}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      tap(_ => this.log(`ottenuto cliente con id = ${id}`)),
      catchError(this.handleError<Cliente>(`getCliente id = ${id}`))
    )
  }

  updateCliente (cliente: Cliente): Observable<any>{
    return this.http.put(this.urlClienti, cliente, this.httpOptions)
    .pipe(
      tap(_ => this.log(`aggiornato cliente id=${cliente.id}`)),
      catchError(this.handleError<any>('updateCliente'))
    );  
  }

  inserisciCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlClienti, cliente, this.httpOptions)
    .pipe(
      tap((cliente:Cliente)=> this.log(`aggiunto cliente con id = ${cliente.id}`)),
      catchError(this.handleError<Cliente>('inserisciCliente'))
    )
  }

  deleteCliente(cliente: Cliente | number): Observable<Cliente>{
    const id = typeof cliente === 'number' ? cliente: cliente.id;
    const url = `${this.urlClienti}/${id}`;

    return this.http.delete<Cliente>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log(`eliminato cliente id=${id}`)),
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      this.log(`${operation} fallita: ${error.message}`);
      return of(result as T);
    }
  }
}