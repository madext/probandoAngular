import { Component, OnInit, Input } from '@angular/core';
import { Ente } from '../ente-service/ente'

@Component({
  selector: 'app-ente-detalle',
  templateUrl: './ente-detalle.component.html',
  styleUrls: ['./ente-detalle.component.css']
})
export class EnteDetalleComponent implements OnInit {
  @Input()
  ente: Ente;
  constructor() { }

  ngOnInit() {
  }

}

