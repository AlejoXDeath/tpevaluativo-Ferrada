import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    CardComponent,
    InicioComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
