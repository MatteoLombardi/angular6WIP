import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DettaglioClienteComponent }  from './dettaglio-cliente/dettaglio-cliente.component';
import { ClientiComponent }      from './clienti/clienti.component';
import { MessaggiComponent }    from './messaggi/messaggi.component';
import {GraficoService} from './grafico.service';
 
import { AppRoutingModule }     from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule/*,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientiComponent,
    DettaglioClienteComponent,
    MessaggiComponent
  ],
  providers:[GraficoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }