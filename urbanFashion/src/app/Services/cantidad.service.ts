import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MasterUrlService} from "./master-url.service";

@Injectable()
export class CantidadService {

  url:string;
  modelo:string = 'Cantidad';
  constructor( private _http:Http,
               private _masterURL:MasterUrlService) {
    this.url = this._masterURL.getUrl();
  }

  get(){
    return this._http.get(this.url+this.modelo)
  }

  getOne(id){
    return this._http.get(this.url+this.modelo+id);
  }

  create(parametros){
    return this._http.post(this.url+this.modelo,parametros);
  }

  update(parametros,id){
    console.log('llega a actualizar con estos parametros ',parametros)


    return this._http.put(this.url+this.modelo+'/'+id,parametros);
  }
  getCantidad(idPrenda,idPeriodo){
    console.log('llea esta id prenda',idPrenda)
    console.log('llea esta id periodo',idPeriodo)

    return this._http.get(this.url+this.modelo+'?idPrenda='+idPrenda+'&idPeriodo='+idPeriodo);
  }

  delete(id){
    return this._http.delete(this.url+this.modelo+'/'+id);
  }

}
