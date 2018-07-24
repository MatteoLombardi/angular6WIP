import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService} from '../cliente.service';
import { ButtonsExtensionComponent } from '../button.extension.component';


@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  clienti: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClienti();
  }

  getClienti(): void {
    this.clienteService.getClienti()
    .subscribe(clienti => this.clienti = clienti);
  }

  delete(cliente: Cliente): void{
    this.clienti = this.clienti.filter(c => c !== cliente);
    this.clienteService.deleteCliente(cliente).subscribe();
  }
}
