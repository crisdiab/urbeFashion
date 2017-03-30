import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() oculto:boolean; //Inyectar Variables de cualquier tipo a los componentes

  // @Output() userUpdated = new EventEmitter();
// ddsdf
  constructor() { }

  ngOnInit() {
  }

  // funcion(){
  //
  //   this.userUpdated.emit({
  //     mensaje:"vales verga"
  //   });

  // }

}
