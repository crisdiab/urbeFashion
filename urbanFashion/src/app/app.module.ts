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
import {TipoPrendaService} from "./Services/tipo-prenda.service";
import {PeriodoService} from "./Services/periodo.service";
import {CodigoService} from "./Services/codigo.service";
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CrearCodigoComponent,
    InicioComponent,
    ListarCodigosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule,
    Ng2FilterPipeModule
  ],
  providers: [
    CantidadService,
    MasterUrlService,
    PeriodoService,
    PrendaService,
    TejidoService,
    CodigoService,
    TipoPrendaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
