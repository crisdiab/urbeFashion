import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrearCodigoComponent } from './crear-codigo/crear-codigo.component';
import {RutasAppModule} from "./routes";
import { InicioComponent } from './inicio/inicio.component';
import { ListarCodigosComponent } from './listar-codigos/listar-codigos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCodigoComponent,
    InicioComponent,
    ListarCodigosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
