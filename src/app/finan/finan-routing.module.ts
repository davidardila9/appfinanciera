import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './ctas/tarjeta/tarjeta.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [

{
  path: '',
  component : HomeComponent,
  children : [
    { path: 'listado', component : ListadoComponent },
    {  path : 'agregar', component : AgregarComponent },
    {  path : 'modificar', component : AgregarComponent },
    { path : 'cliente', component : ClienteComponent},
    {path : 'home', component : HomeComponent},
    {  path: 'tarjeta', component: TarjetaComponent },
    { path: '**', redirectTo : 'listado' },
  ],
}
];


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild (routes)
  ],
  exports: [
    RouterModule

  ] 
})
export class FinanRoutingModule { }
