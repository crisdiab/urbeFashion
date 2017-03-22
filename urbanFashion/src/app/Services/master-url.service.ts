import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {

  private _Url: string = 'https://urbefashion-cristian3006.c9users.io/';
  constructor() {

  }
  getUrl(){
    return this._Url;
  }

}
