import { Component, OnInit } from '@angular/core';
import { Financiera } from '../../interface/financiera.interface';
import {Input} from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: []
})
export class TarjetaComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute) {}

  @Input() financiera!: Financiera

  ngOnInit (): void {

  }
}