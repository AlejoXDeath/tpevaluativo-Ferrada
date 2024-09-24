import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { ProductoComponent } from './pages/producto/producto.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [
    ProductoComponent,
    SoporteComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
