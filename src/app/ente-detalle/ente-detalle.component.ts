import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { EnteService } from '../ente-service/ente.service'
import { Ente } from '../ente-service/ente'

@Component({
  moduleId: module.id,
  selector: 'app-ente-detalle',
  templateUrl: './ente-detalle.component.html',
  styleUrls: ['./ente-detalle.component.css']
})
export class EnteDetalleComponent implements OnInit {
  ente: Ente;

  constructor(
  	private enteService: EnteService,
  	private route: ActivatedRoute,
 	private location: Location
  ) {}
 
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.enteService.leerEnte(+params['id']))
      .subscribe(ente => this.ente = ente);
  }
  regresar(): void {
  this.location.back();
  }

}




// import { Component, OnInit, Input } from '@angular/core';
// import { Ente } from '../ente-service/ente'

// @Component({
//   selector: 'app-ente-detalle',
//   templateUrl: './ente-detalle.component.html',
//   styleUrls: ['./ente-detalle.component.css']
// })
// export class EnteDetalleComponent implements OnInit {
//   @Input() ente: Ente;
//   constructor() { }

//   ngOnInit() {
//   }

// }

