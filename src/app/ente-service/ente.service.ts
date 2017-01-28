import { Injectable } from '@angular/core';
import { Ente } from './ente'
import { ENTES } from './datos-ente'

@Injectable()
export class EnteService {
  
	 leerEntes(): Promise<Ente[]> {
	  	return Promise.resolve(ENTES);
	 }

	 leerEnte(id: number): Promise<Ente> {
        return this.leerEntes()
               .then(ente => ENTES.find(ente => ente.id === id));
     }
}

