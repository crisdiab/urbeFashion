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
    periodo:[],
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
    idEmpresaCodigo:''
  };

  periodos:any=[];
  empresas:any=[];
  departamentos2:any=[];
  prendas:any=[];
  tejidos:any=[];
  cantidades:any=[];
  departamentosFiltrados:any=[];

  cantidadEncontrada={
    id:0,
    cantidad:''
  };
  idPrenda:number=0;
  idPeriodo:number=0;
  idTejido:number=0;

  cantidadVector:any=[];
  cantidadActualizada='';
  ocultar =true

  Filtrados={
    periodo:[],
    prenda:[],
    empresa:[],
    departamento:[],
    tejido:[]

  }

  constructor( private _PeriodoService:PeriodoService,
               private _EmpresaService:EmpresaService,
               private _DepartamentoService:DepartamentoService,
               private _TejidoService: TejidoService,
               private _CantidadService: CantidadService,
               private _PrendaService: PrendaService,
               private _CodigoService: CodigoService

  ) { }


  ngOnInit() {
    //<editor-fold desc="llamar a todos los periodos">
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
    //<editor-fold desc="llamar a todas las emmpresas">
    // Llamar a todas las empresas
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

    //<editor-fold desc="llamar a todas prendas">
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
    //<editor-fold desc="llamar a todos los tejidos">
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
    //<editor-fold desc="llamar a todas las cantidades">

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

  // crearCodigo(formulario: NgForm){
  //   console.log('entro en crear codigo');
  // this.ocultar=false;
  //
  //  var codP= formulario.value.periodosEncontrados.substring(2,4);
  //   //<editor-fold desc="Buscar el id del periodo">
  //
  //   this._PeriodoService.getPerido(formulario.value.periodosEncontrados)
  //     .subscribe(
  //       (res: Response) => {
  //         console.log('periodo',res.json()[0].id)
  //         this.idPeriodo=res.json()[0].id;
  //         //<editor-fold desc="Buscar id de la prenda">
  //
  //         this._PrendaService.getPrenda(formulario.value.prenda2)
  //           .subscribe(
  //             (res: Response) => {
  //               console.log('prenda:',res.json()[0].id);
  //               this.idPrenda=res.json()[0].id;
  //
  //               //<editor-fold desc="Buscar  id del tejido">
  //               this._TejidoService.getTejido(formulario.value.tejido2)
  //                 .subscribe(
  //                   (res: Response) => {
  //                     console.log('tejido:',res.json()[0].id);
  //                     this.idTejido=res.json()[0].id;
  //
  //                     //<editor-fold desc="Buscar Cantidad">
  //                     //Buscar Cantidad
  //                     this._CantidadService.getCantidad(this.idPrenda,this.idPeriodo, this.idTejido)
  //                       .subscribe(
  //                         (res: Response) => {
  //                           console.log('cantidad:',res.json());
  //                           this.cantidadVector=res.json();
  //
  //                           if(this.cantidadVector.length==0){
  //                             //crear cantidad con id de la prenda y periodo
  //                             this.nuevaCantidad.cantidad='0001';
  //                             this.nuevaCantidad.idPrenda=this.idPrenda;
  //                             this.nuevaCantidad.idPeriodo=this.idPeriodo;
  //                             this.nuevaCantidad.idTejido=this.idTejido;
  //                             console.log('con estos valores se va a crear la nueva cantidad',this.nuevaCantidad);
  //                             this._CantidadService.create(this.nuevaCantidad)
  //                               .subscribe(
  //                                 (res: Response) => {
  //                                   console.log('creado con ',res.json());
  //                                 },
  //                                 (err) => {
  //                                   console.log(err);
  //                                 }
  //                               )
  //                             var codigoGenerado=codP+formulario.value.prenda2+formulario.value.tejido2+'0001';
  //                             console.log('codigo parcial generado'+ codigoGenerado);
  //                             this.nuevoCodigo.codigo=codigoGenerado;
  //
  //
  //                            // <editor-fold desc="Crear codigo">
  //                             this._CodigoService.create(this.nuevoCodigo)
  //                               .subscribe(
  //                                 (res: Response) => {
  //                                   console.log('si creo')
  //                                   console.log('antes',this.ocultar)
  //                                   this.ocultar=true;
  //                                   //
  //                                   console.log('despues',this.ocultar)
  //                                   this.seleccionados = {
  //                                     periodo:'',
  //                                     empresa:'',
  //                                     departamento:'',
  //                                     prenda:'',
  //                                     tejido:''
  //                                   };
  //                                   console.log('codigo creado con ',res.json());
  //
  //
  //
  //
  //                                 },
  //                                 (err) => {
  //                                   console.log(err);
  //                                 }
  //                               )
  //                             // </editor-fold>
  //
  //                           }else{
  //                             this.cantidadEncontrada.cantidad=this.cantidadVector[0].cantidad;
  //                             this.cantidadEncontrada.id=this.cantidadVector[0].id;
  //
  //                             console.log('cantidad encontrada', this.cantidadEncontrada);
  //                             var cant=(parseInt(this.cantidadEncontrada.cantidad)+1).toString();
  //                             var actualizar={
  //                               cantidad:''
  //                             };
  //
  //                             switch(cant.length){
  //                               case 1:
  //                                 this.cantidadActualizada='000'+cant;
  //                                 var codigoGenerado=codP+formulario.value.prenda2+formulario.value.tejido2+this.cantidadActualizada;
  //                                 console.log('codigo parcial generado'+ codigoGenerado);
  //                                 this.nuevoCodigo.codigo=codigoGenerado;
  //                                 this._CodigoService.create(this.nuevoCodigo)
  //                                   .subscribe(
  //                                     (res: Response) => {
  //
  //                                       //
  //                                       console.log('codigo creado con ',res.json());
  //                                       //actualizar cantidad
  //                                       console.log('empezo a actualizar')
  //
  //                                       actualizar.cantidad=this.cantidadActualizada
  //
  //                                       this._CantidadService.update(actualizar,this.cantidadEncontrada.id)
  //                                         .subscribe(
  //                                           (res: Response) => {
  //
  //                                             //
  //                                             console.log('actualizado con ',res.json());
  //
  //                                           },
  //                                           (err) => {
  //                                             console.log(err);
  //                                           }
  //                                         )
  //                                     },
  //                                     (err) => {
  //                                       console.log(err);
  //                                     }
  //                                   )
  //                                 break;
  //                               case 2:
  //                                 this.cantidadActualizada='00'+cant;
  //                                 var codigoGenerado=codP+formulario.value.prenda2+formulario.value.tejido2+this.cantidadActualizada;
  //                                 console.log('codigo parcial generado'+ codigoGenerado);
  //                                 this.nuevoCodigo.codigo=codigoGenerado;
  //                                 this._CodigoService.create(this.nuevoCodigo)
  //                                   .subscribe(
  //                                     (res: Response) => {
  //
  //                                       //
  //                                       console.log('codigo creado con ',res.json());
  //                                       //actualizar cantidad
  //                                       console.log('empezo a actualizar')
  //
  //                                       actualizar.cantidad=this.cantidadActualizada
  //
  //                                       this._CantidadService.update(actualizar,this.cantidadEncontrada.id)
  //                                         .subscribe(
  //                                           (res: Response) => {
  //
  //                                             //
  //                                             console.log('actualizado con ',res.json());
  //
  //                                           },
  //                                           (err) => {
  //                                             console.log(err);
  //                                           }
  //                                         )
  //
  //                                       // ;
  //
  //
  //
  //
  //
  //                                     },
  //                                     (err) => {
  //                                       console.log(err);
  //                                     }
  //                                   )
  //                                 break;
  //                               case 3:
  //                                 this.cantidadActualizada='0'+cant;
  //                                 var codigoGenerado=codP+formulario.value.prenda2+formulario.value.tejido2+this.cantidadActualizada;
  //                                 console.log('codigo parcial generado'+ codigoGenerado);
  //                                 this.nuevoCodigo.codigo=codigoGenerado;
  //                                 this._CodigoService.create(this.nuevoCodigo)
  //                                   .subscribe(
  //                                     (res: Response) => {
  //
  //                                       //
  //                                       console.log('codigo creado con ',res.json());
  //                                       //actualizar cantidad
  //                                       console.log('empezo a actualizar')
  //
  //                                       actualizar.cantidad=this.cantidadActualizada
  //
  //                                       this._CantidadService.update(actualizar,this.cantidadEncontrada.id)
  //                                         .subscribe(
  //                                           (res: Response) => {
  //
  //                                             //
  //                                             console.log('actualizado con ',res.json());
  //
  //                                           },
  //                                           (err) => {
  //                                             console.log(err);
  //                                           }
  //                                         )
  //
  //                                       // ;
  //
  //
  //
  //
  //
  //                                     },
  //                                     (err) => {
  //                                       console.log(err);
  //                                     }
  //                                   )
  //                                 break;
  //                               case 4:
  //                                 this.cantidadActualizada=cant;
  //                                 var codigoGenerado=codP+formulario.value.prenda2+formulario.value.tejido2+this.cantidadActualizada;
  //                                 console.log('codigo parcial generado'+ codigoGenerado);
  //                                 this.nuevoCodigo.codigo=codigoGenerado;
  //                                 this._CodigoService.create(this.nuevoCodigo)
  //                                   .subscribe(
  //                                     (res: Response) => {
  //
  //                                       //
  //                                       console.log('codigo creado con ',res.json());
  //                                       //actualizar cantidad
  //                                       console.log('empezo a actualizar')
  //
  //                                       actualizar.cantidad=this.cantidadActualizada
  //
  //                                       this._CantidadService.update(actualizar,this.cantidadEncontrada.id)
  //                                         .subscribe(
  //                                           (res: Response) => {
  //
  //                                             //
  //                                             console.log('actualizado con ',res.json());
  //
  //                                           },
  //                                           (err) => {
  //                                             console.log(err);
  //                                           }
  //                                         )
  //
  //                                       // ;
  //
  //
  //
  //
  //
  //                                     },
  //                                     (err) => {
  //                                       console.log(err);
  //                                     }
  //                                   )
  //                                 break;
  //
  //                             }
  //                           }
  //                         },
  //                         (err) => {
  //                           console.log(err);
  //                         }
  //                       );
  //                     //</editor-fold >
  //
  //
  //                   },
  //                   (err) => {
  //                     console.log(err);
  //                   }
  //                 );
  //               //</editor-fold >
  //
  //             },
  //             (err) => {
  //               console.log(err);
  //             }
  //           );
  //         //</editor-fold >
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   //</editor-fold >
  // }

  verDepartamentos(valor){
    console.log(typeof valor);
    if(valor==''){
      console.log('vacio',valor)
    }else{
      console.log(valor)
      // console.log('selecciono',valor)
      this.departamentos2=this.empresas.filter(function (value) {
        return value.codigo==valor

      })
      console.log( typeof  this.departamentos2)
      this.departamentosFiltrados=this.departamentos2[0].departamentos
      console.log( 'depar2'  ,this.departamentosFiltrados)
    }

  }
  createCodigo(formulario:NgForm){


  }

  obtenerIdPeriodo(valorP){
    if(valorP!=''){
      this.Filtrados.periodo=this.periodos.filter(function (value,) {

        return value.periodo==valorP;

      })

      var idP= this.Filtrados.periodo[0].id;
      console.log(idP)
    }


  }
}
