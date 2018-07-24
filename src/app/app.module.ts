import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
 
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DettaglioClienteComponent }  from './dettaglio-cliente/dettaglio-cliente.component';
import { ClientiComponent }      from './clienti/clienti.component';
import { MessaggiComponent }    from './messaggi/messaggi.component';
import {GraficoService} from './grafico.service';
 
import { AppRoutingModule }     from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule/*,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientiComponent,
    DettaglioClienteComponent,
    MessaggiComponent,
    FormClienteComponent
  ],
  providers:[GraficoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }