import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-directivas-ng-for',
  templateUrl: './directivas-ng-for.component.html',
  styleUrls: ['./directivas-ng-for.component.scss']
})
export class DirectivasNgForComponent implements OnInit {

  proveedores = []

  constructor(private proveedoresService: ProveedoresService) {
    
   }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
