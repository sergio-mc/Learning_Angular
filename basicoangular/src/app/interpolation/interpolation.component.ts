import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  actor = {
    apellidos: 'Sylvanas',
    nombre: 'Nya',
    fechaNacimiento: new Date(1943, 7, 17)
  }



  constructor() { }

  ngOnInit(): void {
  }

  getEdad() {
    return Math.floor((new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000));
  }

}
