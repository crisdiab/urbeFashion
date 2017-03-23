import { Component, OnInit } from '@angular/core';
import {PeriodoService} from "../Services/periodo.service";
import {Response} from "@angular/http";
import {TejidoService} from "../Services/tejido.service";
import {CantidadService} from "../Services/cantidad.service";
import {PrendaService} from "../Services/prenda.service";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-crear-codigo',
  templateUrl: './crear-codigo.component.html',
  styleUrls: ['./crear-codigo.component.css']
})
export class CrearCodigoComponent implements OnInit {

  //Declaracion de variables
  titulo:String ='Bienvenido a Crear Codigo';
  disabledButtons = {
    NuevoCodigoFormSubmitButton: false
  };


  seleccionados = {
    tejido:'',
    periodo:'',
    prenda:'',
};
  periodos:any=[];
  tejidos:any=[];
  cantidades:any=[];
  prendas:any=[];
  codPeriodo:String='';

  constructor( private _PeriodoService:PeriodoService,
               private _TejidoService: TejidoService,
               private _CantidadService: CantidadService,
               private  _PrendaService: PrendaService

  ) { }

  ngOnInit() {
  //  llamar a todos los periodos
    this._PeriodoService.get()
      .subscribe(
        (res: Response) => {
          this.periodos = res.json();
          //
          console.log('periodos cero',res.json());



        },
        (err) => {
          console.log(err);
        }
      )



    //tipo de tejido
    this._TejidoService.get()
      .subscribe(
        (res: Response) => {
          this.tejidos = res.json();

         console.log('tejidos', this.tejidos)

        },
        (err) => {
          console.log(err);
        }
      );
    //cantidades

    this._CantidadService.get()
      .subscribe(
        (res: Response) => {
          this.cantidades = res.json();

          console.log('cantidades', this.cantidades)

        },
        (err) => {
          console.log(err);
        }
      );
    this._PrendaService.get()
      .subscribe(
        (res: Response) => {
          this.prendas = res.json();

          console.log('prendas', this.prendas)

        },
        (err) => {
          console.log(err);
        }
      );
  }

  crearCodigo(formulario: NgForm){
    console.log('llego este formulario ',formulario);
    console.log('valor del periodo'+ formulario.value.periodosEncontrados)
    var codP= formulario.value.periodosEncontrados.substring(2,4);
    var codigoGenerado=codP+formulario.value.prenda2+formulario.value.tejido2;
    console.log('codigo parcial generado'+ codigoGenerado);
    // console.log('peridoo separado',codP)
  }


}
