import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { InicioComponent } from '../inicio/page/inicio/inicio.component';
import { RegistroComponent } from './page/registro/registro.component';


@NgModule({
  declarations: [
    InicioComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
