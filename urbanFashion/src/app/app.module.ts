import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrearCodigoComponent } from './crear-codigo/crear-codigo.component';
import {RutasAppModule} from "./routes";
import { InicioComponent } from './inicio/inicio.component';
import { ListarCodigosComponent } from './listar-codigos/listar-codigos.component';
import {CantidadService} from "./Services/cantidad.service";
import {MasterUrlService} from "./Services/master-url.service";
import {PrendaService} from "./Services/prenda.service";
import {TejidoService} from "./Services/tejido.service";
import {PeriodoService} from "./Services/periodo.service";

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {EmpresaService} from "./Services/empresa.service";
import {DepartamentoService} from "./Services/departamento.service";
import { LoadingComponent } from './Componentes/loading/loading.component';
import { ModalActualizarComponent } from './Componentes/modal-actualizar/modal-actualizar.component';

import { SortByAttributePipe } from 'ng2bln-sort-by-attribute-pipe'
import { ModalConfirmarComponent } from './Componentes/modal-confirmar/modal-confirmar.component';
import {ToasterModule} from "angular2-toaster";
import {Ng2PaginationModule, PaginatePipe, PaginationService} from 'ng2-pagination';
import { AdminComponent } from './admin/admin.component';
import {CodigoService} from "./Services/codigo.service";
import {TablaCodigosComponent} from "./Componentes/tabla-codigos/tabla-codigos.component";
import {CrearEmpresaComponent} from "./crear-empresa/crear-empresa.component";

@NgModule({
  declarations: [
    AppComponent,
    CrearCodigoComponent,
    InicioComponent,
    ListarCodigosComponent,
    LoadingComponent,
    ModalActualizarComponent,
    TablaCodigosComponent,
    ModalConfirmarComponent,
    SortByAttributePipe,
    AdminComponent,
    CrearEmpresaComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule,
    Ng2FilterPipeModule,
    ToasterModule,
    Ng2PaginationModule

  ],
  providers: [
    MasterUrlService,
    PeriodoService,
    EmpresaService,
    DepartamentoService,
    PrendaService,
    TejidoService,
    CantidadService,
    CodigoService,
    PaginationService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
