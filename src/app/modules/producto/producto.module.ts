import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ModsworkshopComponent } from './pages/modsworkshop/modsworkshop.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SoporteComponent } from './pages/soporte/soporte.component';


@NgModule({
  declarations: [
    JuegosComponent,
    ModsworkshopComponent,
    ProductoComponent,
    SoporteComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
