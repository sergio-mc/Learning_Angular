import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  _id: string;
  producto:any = {};
  formProducto:any = {};
  validacion: boolean = false

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService,
              private router: Router) { }

  ngOnInit(): void {
    this._id = this.activatedRoute.snapshot.params._id;

    this.formProducto = new FormGroup({
      name: new FormControl('', [Validators.required]),
      sku: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(null),
      provider: new FormControl('')
    })

    this.productosService.getProductoById(this._id)
                         .subscribe(
                           (res) => {
                             this.producto = res.product;
                             this.formProducto.get('name').setValue(this.producto.name);
                             this.formProducto.get('sku').setValue(this.producto.sku);
                             this.formProducto.get('description').setValue(this.producto.description);
                             this.formProducto.get('price').setValue(this.producto.price);
                             this.formProducto.get('provider').setValue(this.producto.provider);
                            },
                           (err) => {console.log(err)}
                         )
  }


  sendProducto(){
    let producto: any = {
      name: this.formProducto.get('name').value,
      sku: this.formProducto.get('sku').value,
      description: this.formProducto.get('description').value,
      price: this.formProducto.get('price').value,
      provider: this.formProducto.get('provider').value
  
    }
    this.productosService.putProducto(this._id, producto)
                          .subscribe(
                            (res: any) => {
                              this.router.navigate(['/listado-productos'])
                              console.log(res);
                            },
                            (err: any) => {
                              console.log(err);
                            }
                        )
  }

  mostrarValidacion() {
    this.validacion = true;
  }
  

}
