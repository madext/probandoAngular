import { Component, OnInit } from '@angular/core';
import { ENTES } from '../ente-service/datos-ente'
import { Ente } from '../ente-service/ente'
import { EnteService } from '../ente-service/ente.service'

@Component({
  selector: 'app-entes',
  templateUrl: './entes.component.html',
  styleUrls: ['./entes.component.css']
})
export class EntesComponent implements OnInit {
  entes: Ente[]; // Inicializa datos desde la constante ENTES
  enteSeleccionado : Ente; 

   constructor(private enteService: EnteService) { }
  getEntes(): void {
  	this.enteService.leerEntes().then (entes => this.entes = entes);
  }

  ngOnInit() {
  	this.getEntes();
  }

  seleccionar(ente: Ente): void { 
  	this.enteSeleccionado = ente;
  }

}



// import { Component, OnInit } from '@angular/core';
// import { ENTES } from '../ente-service/datos-ente'
// import { Ente } from '../ente-service/ente'
// import { EnteService } from '../ente-service/ente.service'

// @Component({
//   selector: 'app-entes',
//   templateUrl: './entes.component.html',
//   styleUrls: ['./entes.component.css'],
//   providers: [EnteService]
// })
// export class EntesComponent implements OnInit {
//   entes: Ente[]; // Inicializa datos desde la constante ENTES
//   enteSeleccionado : Ente; 

//    constructor(private enteService: EnteService) { }
//   getEntes(): void {
//   	this.enteService.leerEntes().then (entes => this.entes = entes);
//   }

//   ngOnInit() {
//   	this.getEntes();
//   }

//   seleccionar(ente: Ente): void { 
//   	this.enteSeleccionado = ente;
//   }

// }

