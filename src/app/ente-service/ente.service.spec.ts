/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnteService } from './ente.service';

describe('EnteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnteService]
    });
  });

  it('should ...', inject([EnteService], (service: EnteService) => {
    expect(service).toBeTruthy();
  }));
});
