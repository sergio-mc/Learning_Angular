import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  actor = {
    apellidos: 'Sylvanas',
    nombre: 'Nya',
    fechaNacimiento: new Date(1943, 7, 17),
    edad: null
  }
  constructor() { }

  ngOnInit(): void {
  }

  setEdad() {
    this.actor.edad = Math.floor((new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000));
  }

}
