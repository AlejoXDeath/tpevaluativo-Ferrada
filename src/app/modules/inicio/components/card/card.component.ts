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
        imagen: "../../../../../assets/cyberpunk.jpg",                                 
        alt: "Cyberpunk2077",
        precio: "USD$ 14,99",
        desc: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en la megalópolis de Night City, donde te pondrás en la piel de un mercenario o una mercenaria ciberpunk y vivirás su lucha a vida o muerte por la supervivencia en una experiencia mejorada."
      },
      {
        id: "",
        nombre: "Counter-Strike 2", 
        genero: "FPS",
        edad: 2023,
        imagen: "../../../../../assets/cs2.jpg",                                 
        alt: "CS2",
        precio: "Gratis",
        desc: "Después de la exitosa entrega de CS:GO, valve ha decidido dar un paso más allá para proporcionar una experiencia competitiva de primer nivel para millones de jugadores. Ahora el próximo capítulo en la historia de CS:GO está por empezar, su nombre es Counter-Strike 2."
      }, 
      {
        id: "",
        nombre: "Xbox Game PASS", 
        genero: "Juegos gratis",
        edad: 2017,
        imagen: "../../../../../assets/xbox.jpg ",                                 
        alt: "xbox",
        precio: "USD$ 6,99",
        desc: "Sé el primero en jugar a los títulos nuevos, el mismo día de su lanzamiento. Además, disfruta de cientos de juegos de alta calidad con amigos en tu consola, PC y la nube. Agregamos nuevos juegos constantemente, por lo que siempre habrá algo nuevo para disfrutar." 
      },
      {
        id: "",
        nombre: "Sons of the forest", 
        genero: "Survival",
        edad: 2024,
        imagen: "../../../../../assets/sonsof.jpg",                                 
        alt: "the forest",
        precio: "USD$ 30,00",
        desc: "Has sido enviado a buscar un multimillonario perdido en una isla remota, infestada de canibales, crea, construye y lucha por tu supervivencia."
      },
      {
        id: "",
        nombre: "Content Warning", 
        genero: "Coop Terror",
        edad: 2024,
        imagen: "../../../../../assets/content.jpg",                                 
        alt: "Content Warning",
        precio: "USD$ 11,00",
        desc: "¡Grabate a ti o a tus amigos haciendo cosas aterradoras para hacerte viral en SpöökTube y conseguir mucho dinero! (Recomendamos fervientemente ir en compañía)."

      },
      {
        id: "",
        nombre: "Lethal Company", 
        genero: "Multijugador Terror",
        edad: 2023,
        imagen: "../../../../../assets/lethal.jpg",                                 
        alt: "Lethal company",
        precio: "USD$ 8,00",
        desc: "Eres un trabajador de una compañia y tu trabajo consiste en recolectar basura de lunas industrializadas abandonadas para cumplir con la cuota de ganancias de la Compañía."
      }

    ]
    }
  
}
