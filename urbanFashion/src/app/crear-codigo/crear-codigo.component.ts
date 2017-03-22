import { Component, OnInit } from '@angular/core';

import {TipoPrendaService} from "../Services/tipo-prenda.service";

@Component({
  selector: 'app-crear-codigo',
  templateUrl: './crear-codigo.component.html',
  styleUrls: ['./crear-codigo.component.css']
})
export class CrearCodigoComponent implements OnInit {

  constructor(
              private  _TipoPrendaService:TipoPrendaService,

  ) { }

  ngOnInit() {
  }

}
