import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  formProducto: FormGroup;
  validacion: boolean = false;
  enviando: boolean = false;

  constructor(private productosService: ProductosService,
              private router: Router,
              private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.formProducto = new FormGroup({
      name: new FormControl('', [Validators.required]),
      sku: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(null),
      provider: new FormControl('')
    })
  }

  sendProducto(){
    this.enviando = true;
    let producto: any = {
      name: this.formProducto.get('name').value,
      sku: this.formProducto.get('sku').value,
      description: this.formProducto.get('description').value,
      price: this.formProducto.get('price').value,
      provider: this.formProducto.get('provider').value
  
    }
    this.productosService.postProducto(producto)
                         .subscribe(
                           (res: any) => {
                             this.router.navigate(['/listado-productos']);
                             this.enviando = false; // No haria falta porque navegamos y se destruye el componente
                             this.mensajesService.setMensaje(res.message, 'success');
                           },
                           (err: any) => {
                            this.enviando = false;
                            this.mensajesService.setMensaje(err.error.message, 'danger')
                           }
                        )
  }

  mostrarValidacion() {
    this.validacion = true;
  }

}
