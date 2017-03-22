import { Component, OnInit } from '@angular/core';
import {CodigoService} from "../Services/codigo.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-listar-codigos',
  templateUrl: './listar-codigos.component.html',
  styleUrls: ['./listar-codigos.component.css']
})
export class ListarCodigosComponent implements OnInit {

  codigos:any=[];

  constructor(private _CodigoService:CodigoService,
  ) { }

  ngOnInit() {
    // Llamar a todos los Codigos
    this._CodigoService.get()
      .subscribe(
        (res: Response) => {
          this.codigos = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });

          //console.log('codigos cero',this.codigos[0].codigo);
          //var codP= this.codigos[0].codigo.substring(2,4);
          //console.log('peridoo separado',codP)

        },
        (err) => {
          console.log(err);
        }
      )
  }


  actualizarEstado(codigo: any) {
    console.log(codigo);
    console.log(codigo.id);

    this._CodigoService.update(codigo, codigo.id)
      .subscribe(
        (res: Response) => {
          codigo.formularioCerrado = !codigo.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }
}
