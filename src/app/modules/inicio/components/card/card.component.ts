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
        nombre: "Cyberpunk 2077", 
        genero: "RPG",
        edad: 2020,
        imagen: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",                                 
        alt: "Cyberpunk2077"
      },
      {
        id: "",
        nombre: "Counter-Strike 2", 
        genero: "FPS",
        edad: 2023,
        imagen: "https://es.egamersworld.com/_next/image?url=https%3A%2F%2Fegamersworld.com%2Fuploads%2Fblog%2F1696414021417.jpg&w=1920&q=75",                                 
        alt: "CS2"
      }, 
      {
        id: "",
        nombre: "Xbox Game PASS", 
        genero: "Juegos gratis",
        edad: 2017,
        imagen: "https://assets.xboxservices.com/assets/dd/a1/dda1aa1d-99f2-470b-9773-710eabf849e0.jpg?n=Game-Pass-Deals_Boxshot-0_XGP-Logo_720x1080.jpg",                                 
        alt: "xbox"
      },
      {
        id: "",
        nombre: "Sons of the forest", 
        genero: "Survival",
        edad: 2024,
        imagen: "https://upload.wikimedia.org/wikipedia/en/3/3d/Sons_of_the_Forest.jpg",                                 
        alt: "the forest"
      },
      {
        id: "",
        nombre: "Content Warning", 
        genero: "Coop Terror",
        edad: 2024,
        imagen: "https://upload.wikimedia.org/wikipedia/en/6/63/Content_Warning_cover.jpg",                                 
        alt: "RDR2"
      },
      {
        id: "",
        nombre: "Lethal Company", 
        genero: "Multijugador Terror",
        edad: 2023,
        imagen: "https://img.tapimg.net/market/images/Fo3LTYv3a6sMRy-IyDVBLTdNzYba.jpg?imageView2/0/h/270/format/jpg/interlace/1/ignore-error/1",                                 
        alt: "RDR2"
      }

    ]
    }
  
}
