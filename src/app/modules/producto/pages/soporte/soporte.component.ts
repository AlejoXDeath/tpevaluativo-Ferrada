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
      contenido: '¡Bienvenido a nuestra plataforma de venta de videojuegos! Aquí encontrarás una amplia selección de títulos, desde los más recientes lanzamientos hasta clásicos atemporales. A continuación, te mostramos cómo navegar y aprovechar al máximo tu experiencia de compra:'
    },
    {
      titulo: 'Solucionar errores comunes',
      contenido: 'Error al Crear Cuenta: Asegúrate de que tu correo electrónico esté correctamente escrito y que la contraseña cumpla con los requisitos de seguridad. Correo de Confirmación No Recibido: Revisa tu carpeta de spam o intenta reenviar el correo desde la opción "Reenviar Confirmación".En este artículo, aprenderás a solucionar los errores más comunes...'
    },
    {
      titulo: 'Actualizaciones de software',
      contenido: 'Versión 2.0: Agregado inicio de sesión y un panel de CRUD...'
    }
  ];
}