import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { ProductoComponent } from './pages/producto/producto.component';

import { CardComponent } from './components/cards/card/card.component';
import { CardJuegoComponent } from './components/cards/card-juego/card-juego.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatList, MatListModule} from '@angular/material/list';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DlcComponent } from './pages/dlc/dlc.component'
import { CardDlcComponent } from './components/cards/card-dlc/card-dlc.component';
import { CardSoundtrackComponent } from './components/cards/card-soundtrack/card-soundtrack.component';
import { SoundtrackComponent } from './pages/soundtrack/soundtrack.component';
import { Faq1Component } from './pages/faq1/faq1.component';
import { Faq2Component } from './pages/faq2/faq2.component';
import { Faq3Component } from './pages/faq3/faq3.component';

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
    SoundtrackComponent,
    Faq1Component,
    Faq2Component,
    Faq3Component,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatListModule
  ],
  exports:[
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    ProductoComponent,
    DlcComponent,
    JuegosComponent,
    SoporteComponent,
    SoundtrackComponent,
    Faq1Component,
    Faq2Component,
    Faq3Component,
    MatTabsModule,
    MatListModule
  ]
})
export class ProductoModule { }
