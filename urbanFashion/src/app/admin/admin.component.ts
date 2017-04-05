import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'urbe-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 tituloAdmin:String= 'Area de Administracion';
  constructor() { }

  ngOnInit() {
  }

}
