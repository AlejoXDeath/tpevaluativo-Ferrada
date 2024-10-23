import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { ProductoComponent } from './pages/producto/producto.component';

import { CardComponent } from './components/card/card.component';
import { CardJuegoComponent } from './components/card-juego/card-juego.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MatIconModule } from '@angular/material/icon';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DlcComponent } from './pages/dlc/dlc.component'
import { CardDlcComponent } from './components/card-dlc/card-dlc.component';
import { CardSoundtrackComponent } from './components/card-soundtrack/card-soundtrack.component';
import { SoundtrackComponent } from './pages/soundtrack/soundtrack.component';

@NgModule({
  declarations: [
    ProductoComponent,
    CardComponent,
    CardJuegoComponent,
    CardDlcComponent,
    CardSoundtrackComponent,
    JuegosComponent,
    SoporteComponent,
    DlcComponent,
    SoundtrackComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatIconModule,
    MatExpansionModule 
  ],
  exports:[
    MatIconModule,
    MatExpansionModule,
    ProductoComponent,
    DlcComponent,
    JuegosComponent,
    SoporteComponent,
    SoundtrackComponent
  ]
})
export class ProductoModule { }
