import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imagen: string;



  constructor() { }

  ngOnInit(): void {

    const img1= 'assets/madrid.png';
    const img2= 'assets/madrid2.png';

    this.imagen = img2;

    setInterval(() => {
      this.imagen === img1 ? this.imagen = img2 : this.imagen = img1;
    }, 2000)
  }

}
