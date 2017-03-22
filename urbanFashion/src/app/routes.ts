/**
 * Created by crist on 22/03/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';



export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  // {path:'inicio', component: InicioComponent},


];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
