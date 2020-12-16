import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-ng-if',
  templateUrl: './directivas-ng-if.component.html',
  styleUrls: ['./directivas-ng-if.component.scss']
})
export class DirectivasNgIfComponent implements OnInit {

  carpetaIn:string = '';
  carpeta:string = 'proyecto';
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
