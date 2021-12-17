import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancieraComponent} from './financiera/financiera.component';
import { ListadoComponent } from './pagos/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancieraComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
