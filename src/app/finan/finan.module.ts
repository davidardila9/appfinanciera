import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { FinanRoutingModule } from './finan-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AgregarComponent,
    ClienteComponent,
    ListadoComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule, 
    FinanRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  
  exports: [
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
  
})
export class FinanModule { }
