
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtasComponent } from './ctas/ctas.component';
import { financieraService } from '../financiera/services/financiera.service';



@NgModule({
  declarations: [
    CtasComponent
      ],
      exports : [CtasComponent],
  imports: [
    CommonModule
  
  ],

  providers: [
    financieraService
  ]

})
export class CuentasModule { }
