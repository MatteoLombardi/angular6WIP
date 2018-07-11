import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Cliente} from './cliente';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private _http:HttpClient) { }

  graficoClienti(){
    return this._http.get('api/clienti').pipe(
      map(result => result));
  }
}
