import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'urbe-tabla-codigos',
  templateUrl: './tabla-codigos.component.html',
  styleUrls: ['./tabla-codigos.component.css']
})
export class TablaCodigosComponent implements OnInit {


  @Input() Datos:any=[];
  @Input() tituloLista:String;
  @Input() accion:any;
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

}
