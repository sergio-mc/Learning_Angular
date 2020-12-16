import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores = [
    {nombre: 'Gas Natural', localidad: 'Bilbao', cif: 'A123456'},
    {nombre: 'Telefonica', localidad: 'Madrid', cif: 'A654321'},
    {nombre: 'Yoigo', localidad: 'Zaragoza', cif: 'A778452'},
    {nombre: 'Jazztel', localidad: 'Madrid', cif: 'A514204'},
    {nombre: 'Movistar', localidad: 'Valencia', cif: 'A002146'},
    {nombre: 'Vodafone', localidad: 'Barcelona', cif: 'B154235'},
  ]

  constructor() { }

  getProveedores(){
    return this.proveedores
  }

  postProveedores(proveedor){
    this.proveedores.push(proveedor);
  }


}
