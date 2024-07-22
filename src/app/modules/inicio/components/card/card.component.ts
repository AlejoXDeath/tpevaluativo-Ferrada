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
        alt: "Cyberpunk2077",
        desc: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales."
      },
      {
        id: "",
        nombre: "Counter-Strike 2", 
        genero: "FPS",
        edad: 2023,
        imagen: "https://es.egamersworld.com/_next/image?url=https%3A%2F%2Fegamersworld.com%2Fuploads%2Fblog%2F1696414021417.jpg&w=1920&q=75",                                 
        alt: "CS2",
        desc: "Durante las dos últimas décadas, Counter Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma. Ahora el próximo capítulo en la historia de CS está a punto de comenzar. Hablamos de Counter‑Strike 2"
      }, 
      {
        id: "",
        nombre: "Xbox Game PASS", 
        genero: "Juegos gratis",
        edad: 2017,
        imagen: "https://assets.xboxservices.com/assets/dd/a1/dda1aa1d-99f2-470b-9773-710eabf849e0.jpg?n=Game-Pass-Deals_Boxshot-0_XGP-Logo_720x1080.jpg",                                 
        alt: "xbox",
        desc: "Sé el primero en jugar a los títulos nuevos, el mismo día de su lanzamiento. Además, disfruta de cientos de juegos de alta calidad con amigos en tu consola, PC y la nube. Agregamos nuevos juegos constantemente, por lo que siempre habrá algo nuevo para disfrutar."
      },
      {
        id: "",
        nombre: "Sons of the forest", 
        genero: "Survival",
        edad: 2024,
        imagen: "https://upload.wikimedia.org/wikipedia/en/3/3d/Sons_of_the_Forest.jpg",                                 
        alt: "the forest",
        desc: "Enviado a buscar a un multimillonario desaparecido en una isla remota, te encuentras en un infierno infestado de caníbales. Crea, construye y lucha por sobrevivir, solo o con amigos, en este nuevo y aterrador simulador de terror y supervivencia de mundo abierto."
      },
      {
        id: "",
        nombre: "Content Warning", 
        genero: "Coop Terror",
        edad: 2024,
        imagen: "https://upload.wikimedia.org/wikipedia/en/6/63/Content_Warning_cover.jpg",                                 
        alt: "Content Warning",
        desc: "¡Graba a tus amigos haciendo cosas aterradoras para hacerte viral en SpöökTube! (Recomendamos fervientemente ir en compañía)."

      },
      {
        id: "",
        nombre: "Lethal Company", 
        genero: "Multijugador Terror",
        edad: 2023,
        imagen: "https://img.tapimg.net/market/images/Fo3LTYv3a6sMRy-IyDVBLTdNzYba.jpg?imageView2/0/h/270/format/jpg/interlace/1/ignore-error/1",                                 
        alt: "Lethal company",
        desc: "Un juego de terror cooperativo sobre hurgar en lunas abandonadas para vender chatarra a la Compañía."
      }

    ]
    }
  
}
