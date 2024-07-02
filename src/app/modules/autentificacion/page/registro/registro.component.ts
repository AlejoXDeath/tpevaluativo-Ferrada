import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  hide = true;
  
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es STRING                                                                
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  coleccionUsuarios: Usuario[] = [];

  constructor(
    public servicioFirestore: FirestoreService,
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ){}



}