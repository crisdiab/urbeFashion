import {Component, Input, OnInit} from '@angular/core';

import {Response} from "@angular/http";
import {ToasterService} from "angular2-toaster";
import {CodigoService} from "../../Services/codigo.service";

@Component({
  selector: 'urbe-tabla-codigos',
  templateUrl: './tabla-codigos.component.html',
  styleUrls: ['./tabla-codigos.component.css'],


})
export class TablaCodigosComponent implements OnInit {


  @Input() Datos:any=[];

  @Input() tituloLista:String;

  @Input() ocultarCodigo:Boolean;
  @Input() ocultarEmpresa:Boolean;
  @Input() ocultarDepartamento:Boolean;
  @Input() ocultarFecha:Boolean;
  @Input() ocultarEstado:Boolean;
  @Input() ocultarDescripcion:Boolean;
  @Input() ocultarAccion:Boolean;
  FiltrosTabla: any = {
    codigo:'',
    estado:'',
    nombreEmpresa:'',
    nombreDepartamento:'',
    createdAt: ''
  };
  constructor(private _CodigoService:CodigoService,
              private _toasterService: ToasterService
  ) { }


  ngOnInit() {
  }

  ver(formulario, dato){
    console.log('En el modal',formulario);
    console.log(dato);
    console.log('el id del dato', dato.id);

    this._CodigoService.update(formulario,dato.id)
      .subscribe(

        (res: Response) => {
          // console.log("No hubo Errores");
          // console.log(res);
          //codigo.formularioCerrado = !codigo.formularioCerrado;
          console.log("Respuesta:", res.json());
          this._CodigoService.get()
            .subscribe(
              (res: Response) => {
                this.Datos = res.json();

                console.log('codigos',this.Datos);
                //console.log('codigos cero',this.codigos[0].codigo);
                //var codP= this.codigos[0].codigo.substring(2,4);
                //console.log('peridoo separado',codP)

              },
              (err) => {
                console.log('no carga nada')
                console.log(err);
              }
            )
          console.log('estado actualizado satisfactoriamente',res.json());
          //formulario.reset();
          var toast : any = {
            type: 'success',
            title: 'Actualizado',
            body: 'Estado actualizado correctamente',
            showCloseButton: false,
            //closeHtml: '<button>Close</button>'
          };


          this._toasterService.pop(toast);

        },



        (err) => {
          console.log("Ocurrio un error", err);
        }
      );
  }
  Ordenar: any = {
    sortByCol: 'id', // object attribute's name to sort by
    sortDir: 'desc',     // 'asc' or 'desc'
    sortType: 'Number'  // 'String', 'Number', or 'Date'
  }
}
