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
  deshabilitar={
    botonEditar:true,
  };
  pruebas:any=[{codigo:'324',estado:'pendiente'},{codigo:'324',estado:'pendiente'}];


  ocultoModal:Boolean=true;
  vertitulo:String='Modal para algo'
  verLabel=false

  constructor(private _CodigoService:CodigoService,
  ) { }

  ngOnInit() {
    // Llamar a todos los Codigos
    console.log('empieza  ng oninit');
    this._CodigoService.get()
      .subscribe(
        (res: Response) => {
          this.codigos = res.json()
            .map((value) => {

              value.descripcion = 'no tiene';
              return value;
            });

          console.log('codigos',this.codigos);
          //console.log('codigos cero',this.codigos[0].codigo);
          //var codP= this.codigos[0].codigo.substring(2,4);
          //console.log('peridoo separado',codP)

        },
        (err) => {
          console.log('no carga nada')
          console.log(err);
        }
      )
  }

  actualizarEstadoCodigo(codigo:any){
    console.log('entro en actualizar codigo');
    console.log(codigo);
    console.log(codigo.id);
    // console.log('formulario cerrado estado',codigo.formularioCerrado)
    // codigo.formularioCerrado= !codigo.formularioCerrado;
    // console.log('formulario cerrado estado',codigo.formularioCerrado)
    this._CodigoService.update(codigo,codigo.id)
      .subscribe(

        (res: Response) => {

          console.log("No hubo Errores");
          console.log(res);
          codigo.formularioCerrado = !codigo.formularioCerrado;
          console.log("Respuesta:", res.json());

        },

        (err) => {
          console.log("Ocurrio un error", err);
        }
      );
  }
}
