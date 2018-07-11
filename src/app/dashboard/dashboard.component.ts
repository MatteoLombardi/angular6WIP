import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  clienti: Cliente[] = [];
 
  constructor(private clienteService: ClienteService) { }
 
  ngOnInit() {
    this.getClienti();
  }
 
  getClienti(): void {
    this.clienteService.getClienti()
      .subscribe(clienti => this.clienti = clienti.slice(1, 5));
  }
}