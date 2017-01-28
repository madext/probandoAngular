    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { PanelComponent }   from './panel/panel.component';
    import { EntesComponent }      from './entes/entes.component';
    import { EnteDetalleComponent }  from './ente-detalle/ente-detalle.component';


    const routes: Routes = [
      { path: '', redirectTo: '/panel', pathMatch: 'full' },
      { path: 'panel',  component: PanelComponent },
      { path: 'detalle/:id', component: EnteDetalleComponent },
      { path: 'entes',     component: EntesComponent }
    ];
    @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule {}