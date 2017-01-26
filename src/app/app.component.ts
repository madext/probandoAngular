import { Component } from '@angular/core';
import { ENTES } from './ente-service/datos-ente'
import { Ente } from './ente-service/ente'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Entes'; // variable titulo de la web
  entes: Ente[] = ENTES; // Inicializa datos desde la constante ENTES
  enteSeleccionado : Ente; 
  // enteSeleccionado = {id: 33,nombre: 'Jose Lopez'};
  // enteSeleccionado = {};

  seleccionar(ente) { 
  	this.enteSeleccionado = ente;
  }


  };