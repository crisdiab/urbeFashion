import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'urbe-tabla-codigos',
  templateUrl: './tabla-codigos.component.html',
  styleUrls: ['./tabla-codigos.component.css']
})
export class TablaCodigosComponent implements OnInit {


  @Input() Datos:any=[];
  @Input() tituloLista:String;

  @Input() ocultarCodigo:Boolean;
  @Input() ocultarEmpresa:Boolean;
  @Input() ocultarDepartamento:Boolean;
  @Input() ocultarFecha:Boolean;
  @Input() ocultarEstado:Boolean;
  @Input() ocultarAccion:Boolean;
  FiltrosTabla: any = {
    codigo:'',
    estado:'',
    nombreEmpresa:'',
    nombreDepartamento:'',
    createdAt: ''
  };
  constructor() { }


  ngOnInit() {
  }

  ver(evento,dato){
    console.log('Viene este evento',evento)
    console.log(dato)

  }



}
