import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'urbe-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.css']
})
export class ModalConfirmarComponent implements OnInit {

  @Input() tituloModal:String;
  @Output() Respuesta = new EventEmitter();
  @Input() Mensaje:String;
  @Input() ocultar:Boolean;
  @Input() Codigo:String;
  @Output() btnAbrir = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  respuesta(respuesta:string){
    this.Respuesta.emit(respuesta);
  }
  abrirModal(){
    console.log(this.ocultar)

    this.btnAbrir.emit(this.ocultar)
  }

}
