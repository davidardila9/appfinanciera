import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Financiera } from '../../interface/financiera.interface';
import {MatSelectModule} from '@angular/material/select'




@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})



export class AgregarComponent implements OnInit {


  nuevoCliente:  Financiera = {
    nombre: '',
    apellido: '',
    tipoID: '',
    id: '',
    fecha_Nacimiento: '',
    correo: '',
    tipoCuenta: '',
    saldoCuenta: '',
    fecha_Creacion: '',
    numero: '',




  };
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    

    }
  

  
}
