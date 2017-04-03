import { Injectable } from '@angular/core';

@Injectable()
export class MasterUrlService {
  private _Url: string = 'https://urbefashion-cristian3006.c9users.io/';
  //private _Url: string = 'http://192.168.1.53:1337/';

  constructor() {
  }

  getUrl(){
    return this._Url;
  }

}
