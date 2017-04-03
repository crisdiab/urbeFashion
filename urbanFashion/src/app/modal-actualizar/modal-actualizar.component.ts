import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'urbe-modal-actualizar',
  templateUrl: './modal-actualizar.component.html',
  styleUrls: ['./modal-actualizar.component.css']
})
export class ModalActualizarComponent implements OnInit {

  @Input() ocultar:Boolean;

  constructor() { }

  ngOnInit() {
  }

}
