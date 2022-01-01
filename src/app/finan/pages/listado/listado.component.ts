import { Component, OnInit } from '@angular/core';
import { financieraService } from 'src/app/financiera/services/financiera.service';
import { Financiera } from '../../interface/financiera.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  financieras: Financiera [] = [];
  constructor(private financieraService: financieraService   ) { }

  ngOnInit(): void {
    this.financieraService.getFinanciera () .subscribe (res => {
      console.log(res)
      this.financieras = res;
    } )
    
  }

}
