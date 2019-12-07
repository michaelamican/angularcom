import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getProd(){
    console.log('getProd() in http.service called');
    return this._http.get('/api/products');
  }
  newProd(prodObj:object){
    console.log('newProd() in http.service called');
    return this._http.post('/api/products/new', prodObj);
  }
  findProd(id:string){
    console.log('findProd() in http.service called');
    return this._http.get('/api/products/'+id);
  }
  updateProd(id:string, prodObj: object){
    console.log('updateProd() in http.service called');
    return this._http.put('/api/products/'+id+'/edit', prodObj);
  }
  nixProd(id:string){
    console.log('nixProd() in http.service called');
    return this._http.delete('/api/products/'+id);
  }
}