import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  texto:string = '';
  tipoMensaje:string = '';
  showMensaje:boolean = false;


  subscripMensaje: Subscription;

  constructor(private MensajesService: MensajesService) { }

  ngOnInit(): void {
    this.subscripMensaje = this.MensajesService.isMensajeIn
                                               .subscribe(
                                                 (data:any) => {
                                                   this.showMensaje = true;
                                                   this.texto = data.texto;
                                                   console.log(data);
                                                   this.tipoMensaje = data.tipoMensaje;
                                                   setTimeout(() => {
                                                     this.showMensaje = false;
                                                   },4000)
                                                 }
                                               )
  }

}
