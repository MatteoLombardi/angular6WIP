import { Component, OnInit,Input} from '@angular/core';
import { Cliente } from '../cliente';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent {
  @Input() param: Cliente[]
  model = new Cliente();
  submitted = false;
  constructor(private clienteService: ClienteService) { }
  onSubmit() {
    
    if (!this.model) {return;}
    this.clienteService.inserisciCliente(this.model)
    .subscribe(cliente => {
      this.param.push(cliente);
    });
    this.submitted = true;
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
