/**
 * Created by crist on 22/03/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {InicioComponent} from "./inicio/inicio.component";
import {CrearCodigoComponent} from "./crear-codigo/crear-codigo.component";
import {ListarCodigosComponent} from "./listar-codigos/listar-codigos.component";
import {AdminComponent} from "./admin/admin.component";
import {CrearEmpresaComponent} from "./crear-empresa/crear-empresa.component";



export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: InicioComponent},
  {path:'crear', component: CrearCodigoComponent},
  {path:'listarc', component: ListarCodigosComponent},
  {path:'admin', component: AdminComponent},
  {path:'crearemp', component: CrearEmpresaComponent},
];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
