import { Injectable } from '@angular/core';
import { Ente } from './ente'
import { ENTES } from './datos-ente'

@Injectable()
export class EnteService {
  
  constructor() { }
	 leerEntes(): Promise<Ente[]> {
	  	return Promise.resolve(ENTES);
	 }
}

