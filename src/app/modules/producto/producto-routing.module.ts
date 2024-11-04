import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// VISTAS DEL MODULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { DlcComponent } from './pages/dlc/dlc.component';
import { SoundtrackComponent } from './pages/soundtrack/soundtrack.component';
import { Faq1Component } from './pages/faq1/faq1.component';
import { Faq2Component } from './pages/faq2/faq2.component';


const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"juego",component:JuegosComponent
  },
  {
    path:"soporte",component:SoporteComponent
  },
  {
    path:"dlc",component:DlcComponent
  },
  {
    path:"soundtrack",component:SoundtrackComponent
  },
  {
    path:"faq1",component:Faq1Component
  },
  {
    path:"faq2",component:Faq2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
