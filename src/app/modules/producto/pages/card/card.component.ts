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
        nombre: "𝙳𝚁𝙰𝙶𝙾𝙽 𝙱𝙰𝙻𝙻: 𝚂𝚙𝚊𝚛𝚔𝚒𝚗𝚐! 𝚉𝙴𝚁𝙾", 
        genero: "Lucha",
        edad: 2024,
        imagen: "https://media.graphassets.com/hMpRcNy0RhyN3eCinBMb",                                 
        alt: "imagen del nuevo juego de DB",
        precio: "55,99",
        desc: "DRAGON BALL: Sparking! ZERO lleva a un nuevo nivel el legendario estilo de juego de la serie Budokai Tenkaichi. ¡Domina el poder destructivo de los luchadores más fuertes que han aparecido en DRAGON BALL!"
      },
      {
        id: "",
        nombre: "GTA VI", 
        genero: "Mundo Abierto",
        edad: 2024,
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/12/gta-vi-3244512.jpg?tf=3840x",                                 
        alt: "GTA 6",
        precio: "150",
        desc: "Grand Theft Auto VI o GTA 6 es la nueva entrega de la saga de aventuras y acción en mundo abierto de la saga superventas GTA de Rockstar Games, que sentó las bases que luego han imitado todos los 'sandbox' posteriores."
      },
    ]
  }}
