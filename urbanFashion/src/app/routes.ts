/**
 * Created by crist on 22/03/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {InicioComponent} from "./inicio/inicio.component";
import {CrearCodigoComponent} from "./crear-codigo/crear-codigo.component";



export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'crear', component: CrearCodigoComponent},
  {path:'listarc', component: ListarCodigosComponent},



];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
