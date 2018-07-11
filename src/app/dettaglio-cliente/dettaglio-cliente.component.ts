import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClienteService } from '../cliente.service';
 
@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.css']
})
export class DettaglioClienteComponent implements OnInit {
  @Input() cliente: Cliente;
 
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location
  ) { }
 
  ngOnInit(): void {
    this.getCliente();
  }
  
  getCliente():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.getCliente(id)
    .subscribe(cliente => this.cliente = cliente);

  }
 goBack():void{
   this.location.back();
 }

 salva():void{
    this.clienteService.updateCliente(this.cliente)
    .subscribe(() => this.goBack());
 }
}