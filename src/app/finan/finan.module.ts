import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { FinanRoutingModule } from './finan-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AgregarComponent,
    ClienteComponent,
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule, 
    FinanRoutingModule
  ]
})
export class FinanModule { }
