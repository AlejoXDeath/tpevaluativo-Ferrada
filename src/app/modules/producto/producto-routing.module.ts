import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// VISTAS DEL MODULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { DlcComponent } from './pages/dlc/dlc.component';
import { SoundtrackComponent } from './pages/soundtrack/soundtrack.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
