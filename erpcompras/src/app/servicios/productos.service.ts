import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

   endPointProduct:string = 'http://192.168.1.50:8080/product'; // Endpoint environment definitiva asignada aqui

  // endPointProduct:string = environment.endPoint // Endpoint environment no definitivo

  constructor(private httpClient: HttpClient) { }

  getProductos() {
    return this.httpClient.get(this.endPointProduct)
                          .pipe(
                            map((res: any) => {
                              return res
                            })
                          )
  }

  getProductoById(_id: string){
    return this.httpClient.get(this.endPointProduct + '/' + _id)
                          .pipe(
                            map((res: any) => {
                              return res
                            })
                          )
  }

  getProductoBySearch(termino:string){
    return this.httpClient.get(this.endPointProduct + '/search/' + termino)
    .pipe(
      map((res: any) => {
        return res
      })
    )
  }

  postProducto(producto: object){
    return this.httpClient.post(this.endPointProduct, producto)
                          .pipe(
                             map((res: any) => {
                              return res
                            })
                          )
  }

  putProducto(_id:string, producto){
    return this.httpClient.put(this.endPointProduct + '/' + _id, producto)
                          .pipe(
                            map((res: any) => {
                            return res
                          })
                        )                  
  }

  deleteProducto(_id:string){
    return this.httpClient.delete(this.endPointProduct + '/' + _id)
                          .pipe(
                            map((res: any) => {
                            return res
                          })
                        )                  
  }
}
