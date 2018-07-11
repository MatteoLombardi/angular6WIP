import { Injectable } from '@angular/core';
     
@Injectable({
  providedIn: 'root',
})
export class MessaggioService {
  messaggi: string[] = [];
 
  add(messaggio: string) {
    this.messaggi.push(messaggio);
  }
  
  clear() {
    this.messaggi = [];
  }
}