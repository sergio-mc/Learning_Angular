import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-crear-provedor',
  templateUrl: './crear-provedor.component.html',
  styleUrls: ['./crear-provedor.component.scss']
})
export class CrearProvedorComponent implements OnInit {

  proveedor = {
    nombre: null,
    localidad: null,
    cif: null,
  }


  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {

  }

  addProveedor() {
    this.proveedoresService.postProveedores({ 
      nombre: this.proveedor.nombre,
      localidad: this.proveedor.localidad,
      cif: this.proveedor.cif
     });
  }
}
