import { Component, OnInit } from '@angular/core';
import {EmpresaService} from "../Services/empresa.service";
import {NgForm} from "@angular/forms";
import {Response} from "@angular/http";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'urbe-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  titulo:String = 'Bienvenido a Crear Empresa';

  openModal:Boolean=true;

  modalOculto:Boolean ;

  nuevaEmpresa={
    nombre:'',
    codigo:'',
  };

  constructor(private _EmpresaService:EmpresaService,
              private _toasterService: ToasterService
  ) { }

  ngOnInit() {
  }

  crearEmpresa(formulario:NgForm,respuesta){

    if(respuesta=='acepto' ){
      this.modalOculto=true;
      console.log('datos traidos del formulario',formulario.value);

      console.log('va crear con este codigo',this.nuevaEmpresa);
      //<editor-fold desc="Crear el codigo cuando la cantidad no existe">
      this._EmpresaService.create(this.nuevaEmpresa)
        .subscribe(
          (res: Response) => {
            this.modalOculto=false;
            this.openModal=true;
            console.log('codigo creado satisfactoriamente',res.json());
            //formulario.reset();
            var toast : any = {
              type: 'success',
              title: 'Creado',
              body: 'Codigo generado correctamente',
              showCloseButton: true,
              // closeHtml: '<button>Close</button>'
            };


            this._toasterService.pop(toast);
          },
          (err) => {
            this.modalOculto=false;
            this.openModal=true;
            var toast : any = {
              type: 'error',
              title: 'Lo Sentimos',
              body: 'Ocurrió un problema, inténtelo de nuevo',
              showCloseButton: true,
              // closeHtml: '<button>Close</button>'
            };


            this._toasterService.pop(toast);
            console.log('No se creo el codigo',err);
          }
        )
      //</editor-fold>


      // let timeoutId = setTimeout(() => {
      //   console.log('hello');
      //   this.modalOculto=false
      //   this.openModal=true;
      //
      // }, 2000);

    }else{

      this.openModal=true;
      this.nuevaEmpresa={
        nombre:'',
        codigo:''
      };
      // this.seleccionados = {
      //   periodo:'',
      //   empresa:'',
      //   departamento:'',
      //   prenda:'',
      //   tejido:''
      // };

      console.log('no acepto')
    }

  }

  AbrirModalCrear(formulario:NgForm, respuesta){

    if(formulario.value.nombreEmpresa==''|| formulario.value.codigoEmpresa==''){
      var toast : any = {
        type: 'error',
        title: 'Error',
        body: 'Debe llenar todos los campos',
        showCloseButton: true,
        closeHtml: '<button>Close</button>'
      };


      this._toasterService.pop(toast);
    }else{
      this.openModal=false;


    }
  }

}
