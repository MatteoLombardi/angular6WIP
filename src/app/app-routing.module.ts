import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ClientiComponent }      from './clienti/clienti.component';
import { DettaglioClienteComponent }  from './dettaglio-cliente/dettaglio-cliente.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dettaglio/:id', component: DettaglioClienteComponent },
  { path: 'clienti', component: ClientiComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}