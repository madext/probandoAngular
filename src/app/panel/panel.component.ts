import { Component, OnInit } from '@angular/core';
import { Ente } from '../ente-service/ente'
import { ENTES } from '../ente-service/datos-ente'
import { EnteService } from '../ente-service/ente.service'

@Component({
  moduleId: module.id,
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  entes: Ente[] = [];
  constructor(private enteService: EnteService) { 
   this.enteService.leerEntes()
      .then(entes => this.entes = entes.slice(1, 5));
  }

  ngOnInit() {
  }

}
