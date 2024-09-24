import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// VISTAS DEL MODULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"soporte",component:SoporteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
