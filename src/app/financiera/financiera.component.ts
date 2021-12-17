import { Component } from '@angular/core';

@Component ({
    selector: 'app-financiera',
    templateUrl: 'financiera.component.html',
})

export class FinancieraComponent {

    Nombre: string = 'patin';
    Apellidos: string = 'Ardila';
    edad  : number =  30;
    tipoDeIdentificacion : string = 'C.C';
    numeroDeIdentificacion : number = 1013156274;
    correoDeIdentificacion : string = '123@gmail.com';
    fecha : number = 100;
    saldoDeCuenta : number = 1000000;

    get NombreCapitalizado () {
        return this.Nombre.toUpperCase();
    }

    get IncrementarSaldo () {
        return this.saldoDeCuenta + 300000;
        
    }
}