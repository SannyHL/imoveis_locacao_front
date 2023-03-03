import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { EnderecosComponent } from './enderecos/enderecos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'contratos', component: ContratosComponent},
  {path: 'enderecos', component: EnderecosComponent},
  {path: 'imoveis', component: ImoveisComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
