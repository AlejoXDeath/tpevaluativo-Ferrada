import { Component } from '@angular/core';

import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Juego[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Skyrim", 
        genero: "RPG",
        edad: 2011,
        imagen: "https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg",                                 
        alt: "Portada de Skyrim"
      }
    ]
    }
  
}
