import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// VISTAS DEL MODULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { JuegosComponent } from './pages/juegos/juegos.component';


const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"juego",component:JuegosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
