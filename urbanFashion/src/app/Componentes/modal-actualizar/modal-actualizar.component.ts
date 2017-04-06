import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'urbe-modal-actualizar',
  templateUrl: './modal-actualizar.component.html',
  styleUrls: ['./modal-actualizar.component.css']
})
export class ModalActualizarComponent implements OnInit {

  estadoSeleccionado:string;
  descripcionCodigo:string;

  @Input() ocultar:Boolean;
  @Output() salida =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  actualizar(formulario:NgForm){
    this.salida.emit(formulario.value);
  }

}
