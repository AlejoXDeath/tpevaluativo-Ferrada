import { Component } from '@angular/core';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent {
  articulos = [
    {
      titulo: 'Cómo usar la plataforma',
      contenido: 'Aquí tienes información detallada sobre cómo usar la plataforma...'
    },
    {
      titulo: 'Solucionar errores comunes',
      contenido: 'En este artículo, aprenderás a solucionar los errores más comunes...'
    },
    {
      titulo: 'Actualizaciones de software',
      contenido: 'Aquí se detallan las últimas actualizaciones de software...'
    }
  ];
}