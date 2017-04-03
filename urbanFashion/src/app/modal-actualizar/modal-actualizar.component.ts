import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'urbe-modal-actualizar',
  templateUrl: './modal-actualizar.component.html',
  styleUrls: ['./modal-actualizar.component.css']
})
export class ModalActualizarComponent implements OnInit {

  @Input() ocultar:Boolean;
  @Output() salida =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  funcion(){
    this.salida.emit({
      mensaje:'dfdf'
    })

  }

}
