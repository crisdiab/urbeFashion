import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'urbe-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  titulo:String = 'Bienvenido a Crear Empresa';

  nuevaEmpresa={
    nombre:'',
    codigo:'',
  };

  constructor() { }

  ngOnInit() {
  }

}
