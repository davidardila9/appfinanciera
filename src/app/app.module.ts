import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentasModule } from './cuentas/cuentas.module';
import { FinancieraComponent} from './financiera/financiera.component';
import { ListadoComponent } from './cuentas/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancieraComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CuentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
