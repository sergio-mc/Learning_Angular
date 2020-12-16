import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: number, precision:number, moneda?:string ): string {
    let redondeo;
    let factor = Math.pow(10,precision);
    if(value < 0){
      redondeo = Math.round(-value * factor) / factor -1;
    }else {
      redondeo = Math.round(value * factor) / factor;
    }
    redondeo = new Intl.NumberFormat('es',{minimumFractionDigits: precision}).format(redondeo);
    return moneda ? redondeo + moneda : redondeo;
  }

}
