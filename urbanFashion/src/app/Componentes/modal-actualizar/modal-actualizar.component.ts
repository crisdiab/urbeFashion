import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmpresaService} from "../../Services/empresa.service";
import {Response} from "@angular/http";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'urbe-modal-actualizar',
  templateUrl: './modal-actualizar.component.html',
  styleUrls: ['./modal-actualizar.component.css']
})
export class ModalActualizarComponent implements OnInit {

  estadoSeleccionado:string;
  descripcionCodigo:string;

  empresas:any=[];
  departamentos:any=[];
  departamentosFiltrados:any=[];

  seleccionados = {
    empresa:'',
    departamento:''
  };

  @Input() ocultar:Boolean;
  @Output() salida =  new EventEmitter();

  constructor(private _EmpresaService:EmpresaService,
              private _toasterService: ToasterService
  ) { }

  ngOnInit() {
    //<editor-fold desc="Llamar a todas las empresas">
    this._EmpresaService.get()
      .subscribe(
        (res: Response) => {
          this.empresas = res.json();
          console.log('empresas',res.json());
          this.empresas = this.empresas.filter(function (value) {
            return value.estado=='activo'
          });
        },
        (err) => {
          console.log(err);
        }
      );
    //</editor-fold >
  }

  actualizar(formulario:NgForm){

    if(formulario.value.estado==''|| formulario.value.nombreEmpresa==''
      ||formulario.value.nombreDepartamento==''||formulario.value.descripcion==''){
      var toast : any = {
        type: 'error',
        title: 'Error',
        body: 'Debe llenar todos los campos',
        showCloseButton: true,
        closeHtml: '<button>Close</button>'
      };


      this._toasterService.pop(toast);
    } else {
      this.salida.emit(formulario.value);
    }



  }

  obtenerDepartamento(valor){
    this.seleccionados.departamento='';
    this.departamentosFiltrados=[];

    if(valor!=''){
      console.log(valor);
      this.departamentos = this.empresas.filter(function (value) {

        return value.nombre==valor;
      });
      if(this.departamentos[0].departamentos.length==0){
        this.departamentosFiltrados;
      }


      console.log('departamentos',this.departamentos[0].departamentos);
      this.departamentosFiltrados=this.departamentos[0].departamentos;
      //  console.log( 'departamentos filtrados'  ,this.departamentosFiltrados)
    }
  }

}
