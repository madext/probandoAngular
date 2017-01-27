import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnteDetalleComponent } from './ente-detalle/ente-detalle.component';
import { EntesComponent } from './entes/entes.component';
import { EnteService } from './ente-service/ente.service'


@NgModule({
  declarations: [
    AppComponent,
    EnteDetalleComponent,
    EntesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EnteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
