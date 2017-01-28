import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { EnteDetalleComponent } from './ente-detalle/ente-detalle.component';
import { EntesComponent } from './entes/entes.component';
import { EnteService } from './ente-service/ente.service';
import { PanelComponent } from './panel/panel.component'


@NgModule({
  declarations: [
    AppComponent,
    EnteDetalleComponent,
    EntesComponent,
    PanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EnteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
