import { Component, OnInit } from '@angular/core';
import { ENTES } from './ente-service/datos-ente'
import { Ente } from './ente-service/ente'
import { EnteService } from './ente-service/ente.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnteService]
})
export class AppComponent {

  titulo: string = 'Entes'; // variable titulo de la web
  entes: Ente[]; // Inicializa datos desde la constante ENTES
  enteSeleccionado : Ente; 

  constructor(private enteService: EnteService) { }

  getEntes(): void {
  this.enteService.leerEntes().then (entes => this.entes = entes);
  }

  ngOnInit(): void {
    this.getEntes();
  }
  // enteSeleccionado = {id: 33,nombre: 'Jose Lopez'};
  // enteSeleccionado = {};
  
  seleccionar(ente: Ente): void { 
  	this.enteSeleccionado = ente;
  }


  }