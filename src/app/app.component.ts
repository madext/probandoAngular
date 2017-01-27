import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Entes'; 
}


// import { Component, OnInit } from '@angular/core';
// import { ENTES } from './ente-service/datos-ente'
// import { Ente } from './ente-service/ente'
// import { EnteService } from './ente-service/ente.service'


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [EnteService]
// })
// export class AppComponent {

//   titulo: string = 'Entes'; 
//   entes: Ente[]; 
//   enteSeleccionado : Ente; 

//   constructor(private enteService: EnteService) { }

//   getEntes(): void {
//   this.enteService.leerEntes().then (entes => this.entes = entes);
//   }

//   ngOnInit(): void {
//     this.getEntes();
//   }
  
//   seleccionar(ente: Ente): void { 
//     this.enteSeleccionado = ente;
//   }

// }