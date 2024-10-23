import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-soundtrack',
  templateUrl: './card-Soundtrack.component.html',
  styleUrls: ['./card-Soundtrack.component.css']
})
export class CardSoundtrackComponent {
  // Definimos colección de productos locales
  coleccionProductos: Producto[] = [];
  coleccionSoundtrack: Producto[] = [];

  // Variable local para manejar estado de un modal
  productoSeleccionado!: Producto;

  // Variable local para manejar estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) {}

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      this.mostrarProductosSoundtrack();
    });
  }

  // Función para filtrar y ordenar los productos de tipo "juegos"
  mostrarProductosSoundtrack() {
    this.coleccionSoundtrack = []; // Reiniciar la colección

    this.coleccionProductos.forEach(producto => {
      // Si no es de tipo "Dlc" o "Soundtracks", se añade a la colección de juegos
      if (producto.categoria === "juego") {
        this.coleccionSoundtrack.push(producto);
      }
    });

    // Ordenar la colección de juegos por nombre
    this.coleccionSoundtrack.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }

  productoAnadido(producto: Producto) {
    try {
      Swal.fire({
        title: 'Perfecto!',
        text: `Ha añadido ${producto.nombre} al carrito`,
        icon: 'info'
      });
    } catch (error) {
      Swal.fire({
        title: '¡Oh no!',
        text: 'Ha ocurrido un error\n' + error,
        icon: 'error'
      });
    }
  }
}
