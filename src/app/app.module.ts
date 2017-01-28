import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EnteDetalleComponent } from './ente-detalle/ente-detalle.component';
import { EntesComponent } from './entes/entes.component';
import { EnteService } from './ente-service/ente.service';
import { PanelComponent } from './panel/panel.component'

const appRoutes: Routes = [
  { path: 'entes', component: EntesComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'detalle/:id', component: EnteDetalleComponent }, 
  { path: '',
    redirectTo: '/panel',
    pathMatch: 'full'
  },

];


@NgModule({
  declarations: [
    AppComponent,
    EnteDetalleComponent,
    EntesComponent,
    PanelComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EnteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
