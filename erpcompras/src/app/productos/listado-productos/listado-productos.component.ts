import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  productos: any = [];
  showModal: boolean = false;
  _id:string = '';
  formSearch:any;
  consultando: boolean = false;

  @ViewChild('search',{static:false}) searchRef: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, 
              private productosService: ProductosService,
              private router: Router) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    this.loadProductos();
    this.onSearch();
  }

  onSearch(){
    this.formSearch.get('search').valueChanges
                                 .subscribe(
                                   (data:any) => {
                                     if(data.length > 0){
                                      this.consultando = true;
                                      this.productosService.getProductoBySearch(data)
                                      .subscribe(
                                        (res:any) =>{
                                          this.productos = res.products
                                          this.consultando = false;
                                        },
                                        (err: any) => {
                                          console.log(err);
                                          this.consultando = false;
                                        }
                                        )
                                     } else {
                                       this.loadProductos()
                                     }
                                   }
                                 )
  }

  loadProductos(){
    this.productosService.getProductos()
                         .subscribe(
                           (res:any) =>{
                             this.productos = res.products;
                             console.log(res);
                             console.log(this.productos)
                           },
                           (err: any) => {
                             console.log(err);
                           }
                           )
  }

  deleteProducto(_id:string){ 
    this.productosService.deleteProducto(_id)
                          .subscribe(
                            (res:any) =>{
                              console.log(res);
                              this.loadProductos();
                            },
                            (err: any) => {
                              console.log(err);
                            }
                            )
  }

  toggleModal(param?:any){
    if(param){
      this._id = param;
    }
    this.showModal = !this.showModal;
  }

  refresh(): void { // En el caso de querer recargar la pagina en algun momento
    window.location.reload();
  }

  getAccion(event: any){
    if(event.confirm){
      this.deleteProducto(this._id);
      this.toggleModal()
    } else {
      this.toggleModal()
    }
  }

  showForm(){
    this.searchRef.nativeElement.classList.toggle('open')
  }
}
