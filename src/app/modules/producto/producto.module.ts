import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { ProductoComponent } from './pages/producto/producto.component';

import { CardComponent } from './pages/card/card.component';
import { CardJuegoComponent } from './pages/card-juego/card-juego.component';
import { JuegosComponent } from './pages/juegos/juegos.component';

@NgModule({
  declarations: [
    ProductoComponent,
    CardComponent,
    CardJuegoComponent,
    JuegosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
