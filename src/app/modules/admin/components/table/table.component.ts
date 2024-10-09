import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  modalVisibleproducto: boolean=false
  productoSeleccionado!: Producto

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    desarrollador: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        desarrollador: this.producto.value.desarrollador!,
        edad: this.producto.value.edad!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      };
  
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Ha agregado un nuevo producto con éxito.',
          });
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ha ocurrido un error al cargar un producto.',
          });
        });
    }
  }
  
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleproducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }
  
  borrarProducto() {
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
      .then(respuesta => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Se ha podido eliminar con éxito.',
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al eliminar un producto: \n' + error,
        });
      });
  }
  
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      desarrollador: productoSeleccionado.desarrollador,
      edad: productoSeleccionado.edad,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
    });
  }
  
  editarProducto() {
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      desarrollador: this.producto.value.desarrollador!,
      edad: this.producto.value.edad!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
    };
  
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El producto se ha modificado con éxito.',
        });
        this.producto.reset();
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al modificar el producto \n' + error,
        });
      });
  }}