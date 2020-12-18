import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }

  getUserRole(){
    return 'buyer' // CAMBIAR A ADMIN PARA PODER EDITAR LAS COSAS, ESTE SERIA EL ROL DEL USUARIO
  }
}
