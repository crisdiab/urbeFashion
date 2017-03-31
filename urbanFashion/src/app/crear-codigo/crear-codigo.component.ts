import { Component, OnInit } from '@angular/core';
import {PeriodoService} from "../Services/periodo.service";
import {Response} from "@angular/http";
import {TejidoService} from "../Services/tejido.service";
import {CantidadService} from "../Services/cantidad.service";
import {PrendaService} from "../Services/prenda.service";
import {NgForm} from "@angular/forms";
import {CodigoService} from "../Services/codigo.service";
import {EmpresaService} from "../Services/empresa.service";
import {DepartamentoService} from "../Services/departamento.service";

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
    periodo:'',
    empresa:'',
    departamento:'',
    prenda:'',
    tejido:''
  };

  nuevaCantidad={
    cantidad:'',
    idPrenda:0,
    idTejido:0,
    idPeriodo:0
  };
  nuevoCodigo={
    codigo:'',
    idEmpresaCodigo:0,
    nombreEmpresa:'',
    nombreDepartamento:''
  };

  periodos:any=[];
  empresas:any=[];
  departamentos:any=[];
  departamentosFiltrados:any=[];
  prendas:any=[];
  tejidos:any=[];
  cantidades:any=[];


  cantidadEncontrada={
    id:0,
    cantidad:''
  };

  idEmpresa:number=0;
  idDepartamento:number=0;
  idPeriodo:number=0;
  idPrenda:number=0;
  idTejido:number=0;

  nombreEmpresa:'';
  nombreDepartamento:'';

  cantidadVector:any=[];
  cantidadActualizada='';
  modalOculto:Boolean ;

  Filtrados={
    periodo:[],
    empresa:[],
    departamento:[],
    prenda:[],
    tejido:[]
  };

  constructor( private _PeriodoService:PeriodoService,
               private _EmpresaService:EmpresaService,
               private _DepartamentoService:DepartamentoService,
               private _TejidoService: TejidoService,
               private _CantidadService: CantidadService,
               private _PrendaService: PrendaService,
               private _CodigoService: CodigoService

  ) { }


  ngOnInit() {
    //<editor-fold desc="Llamar a todos los periodos">
    // Llamar a todos los periodos
    this._PeriodoService.get()
      .subscribe(
        (res: Response) => {
          this.periodos = res.json();
          console.log('periodos',res.json());
        },
        (err) => {
          console.log(err);
        }
      );
    //</editor-fold>
    //<editor-fold desc="Llamar a todas las empresas">
    this._EmpresaService.get()
      .subscribe(
        (res: Response) => {
          this.empresas = res.json();
          console.log('empresas',res.json());
        },
        (err) => {
          console.log(err);
        }
      );
    //</editor-fold >
    //<editor-fold desc="Llamar a todas prendas">
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
    //</editor-fold >
    //<editor-fold desc="Llamar a todos los tejidos">
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
    //</editor-fold >
    //<editor-fold desc="Llamar a todas las cantidades">

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
    //</editor-fold >
  }

  obtenerDepartamento(valor){
   this.seleccionados.departamento=''
    this.departamentosFiltrados=[];

    if(valor!=''){
      console.log(valor);
      this.departamentos = this.empresas.filter(function (value) {
        return value.codigo==valor;
      })
      console.log('departamentos',this.departamentos);
      this.departamentosFiltrados=this.departamentos[0].departamentos;
      console.log( 'departamentos filtrados'  ,this.departamentosFiltrados)
    }
  }

  //<editor-fold desc="Crear Código">
  crearCodigo(formulario:NgForm){
    let codigoPeriodo= this.seleccionados.periodo.substring(2,4);
    console.log(codigoPeriodo+this.seleccionados.prenda+this.seleccionados.tejido);
    console.log(this.idPeriodo+' '+this.idPrenda+' '+this.idTejido);


    //Buscar Cantidad
    this._CantidadService.getCantidad(this.idPrenda,this.idPeriodo, this.idTejido)
      .subscribe(
        (res: Response) => {
          console.log('cantidad:',res.json());
          this.cantidadVector=res.json();

          if(this.cantidadVector.length == 0){

            //<editor-fold desc="Crear objeto nueva cantidad">
            //crear cantidad con id de la prenda y periodo
            this.nuevaCantidad.cantidad='0001';
            this.nuevaCantidad.idPrenda=this.idPrenda;
            this.nuevaCantidad.idPeriodo=this.idPeriodo;
            this.nuevaCantidad.idTejido=this.idTejido;
            //</editor-fold>
            //<editor-fold desc="Crear la cantidad">
            this._CantidadService.create(this.nuevaCantidad)
              .subscribe(
                (res: Response) => {
                  console.log(' Se creo con ',res.json());
                  },
                (err) => {
                  console.log('No se pudo crear la cantidad',err);
                }
              );
            //</editor-fold>

            var codigoGenerado = codigoPeriodo+this.seleccionados.prenda+this.seleccionados.tejido+'0001';
            console.log('codigo parcial generado'+ codigoGenerado);
            //<editor-fold desc="crear objeto nuevo codigo">
            this.nuevoCodigo.codigo = codigoGenerado;
            this.nuevoCodigo.idEmpresaCodigo = this.idEmpresa;
            this.nuevoCodigo.nombreEmpresa = this.nombreEmpresa;
            this.nuevoCodigo.nombreDepartamento = this.nombreDepartamento;

            //</editor-fold>
            this._CodigoService.create(this.nuevoCodigo)
              .subscribe(
                (res: Response) => {
                  this.modalOculto=!this.modalOculto;
                  this.seleccionados = {
                    periodo:'',
                    empresa:'',
                    departamento:'',
                    prenda:'',
                    tejido:''
                  };
                  console.log('codigo creado cuando no existe la cantidad',res.json());
                  //formulario.reset();
                  },
                (err) => {
                  console.log('No se creo el codigo',err);
                }
                )
          }else{
            this.cantidadEncontrada.cantidad = this.cantidadVector[0].cantidad;
            this.cantidadEncontrada.id = this.cantidadVector[0].id;

            console.log('cantidad encontrada', this.cantidadEncontrada);
            var cant = (parseInt(this.cantidadEncontrada.cantidad)+1).toString();
            var actualizar={
              cantidad:''
            };
          //<editor-fold desc="switch para actualizar cantidad">
            switch(cant.length){
              case 1:
                this.cantidadActualizada='000'+cant;
                break;

              case 2:
                this.cantidadActualizada='00'+cant;
                break;

              case 3:
                this.cantidadActualizada='0'+cant;
                break;

              case 4:
                this.cantidadActualizada=cant;
                break;
            }

            //</editor-fold>
            var codigoGenerado = codigoPeriodo+this.seleccionados.prenda+this.seleccionados.tejido+this.cantidadActualizada;
            this.nuevoCodigo.codigo = codigoGenerado;
            this.nuevoCodigo.idEmpresaCodigo = this.idEmpresa;
            this.nuevoCodigo.nombreEmpresa = this.nombreEmpresa;
            this.nuevoCodigo.nombreDepartamento = this.nombreDepartamento;

            this._CodigoService.create(this.nuevoCodigo)
              .subscribe(
                (res: Response) => {
                  console.log('codigo creado con ',res.json());
                  //actualizar cantidad
                  console.log('empezo a actualizar');
                  actualizar.cantidad = this.cantidadActualizada;
                  this._CantidadService.update(actualizar,this.cantidadEncontrada.id)
                    .subscribe(
                      (res: Response) => {
                        console.log('actualizado con ',res.json());
                        this.modalOculto=!this.modalOculto;
                        this.seleccionados = {
                          periodo:'',
                          empresa:'',
                          departamento:'',
                          prenda:'',
                          tejido:''
                        };


                      },
                      (err) => {

                        console.log('No se pudo actualizar la cantidad',err);
                      }
                    )
                },
                (err) => {
                  console.log('No se pudo crear el codigo',err);
                }
              )
          }
        },
        (err) => {
          console.log(err);
        });

  }
  //</editor-fold >

  //<editor-fold desc="Obtener el ID del Perido">
  obtenerIdPeriodo(valorP){
    if(valorP!=''){
      this.Filtrados.periodo=this.periodos.filter(function (value){
        return value.periodo == valorP;
      })
      this.idPeriodo = this.Filtrados.periodo[0].id;
      console.log('id del periodo',this.idPeriodo)
    }
  }
  //</editor-fold>

  //<editor-fold desc="Obtener el ID de la Empresa">
  obtenerIdEmpresa(valorEmpresa){
    if(valorEmpresa!=''){
      this.Filtrados.empresa = this.empresas.filter(function (value){
        return value.codigo == valorEmpresa;
      })
      this.idEmpresa = this.Filtrados.empresa[0].id;
      this.nombreEmpresa = this.Filtrados.empresa[0].nombre;
      console.log('id de la empresa',this.idEmpresa);
      console.log('nombre de la empresa',this.nombreEmpresa);
    }
  }
  //</editor-fold>

  //<editor-fold desc="Obtener el ID del Departamento">
  obtenerIdDepartamento(valorDepartamento){
    if(valorDepartamento!=''){
      this.Filtrados.departamento = this.departamentosFiltrados.filter(function (value){
        return value.codigo == valorDepartamento;
      });
      this.idDepartamento = this.Filtrados.departamento[0].id;
      this.nombreDepartamento = this.Filtrados.departamento[0].nombre;
      console.log('id del departamento',this.idDepartamento);
      console.log('nombre del departamento',this.nombreDepartamento);
    }
  }
  //</editor-fold>

  //<editor-fold desc="Obtener el ID de la Prenda">
  obtenerIdPrenda(valorPrenda){
    if(valorPrenda!=''){
      this.Filtrados.prenda = this.prendas.filter(function (value){
        return value.codigo == valorPrenda;
      })
      this.idPrenda= this.Filtrados.prenda[0].id;
      console.log('id de la prenda',this.idPrenda);
    }
  }
  //</editor-fold>

  //<editor-fold desc="Obtener el ID del Tejido">
  obtenerIdTejido(valorTejido){
    if(valorTejido != ''){
      this.Filtrados.tejido = this.tejidos.filter(function (value){
        return value.codigo == valorTejido;
      })
      this.idTejido = this.Filtrados.tejido[0].id;
      console.log('id del tejido',this.idTejido);
    }
  }
  //</editor-fold>
}
