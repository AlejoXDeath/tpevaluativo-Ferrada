import { Injectable } from '@angular/core';
// servicio en la nube de autentificación de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private auth: AngularFireAuth,
      private servicioFirestore: AngularFirestore
  ) { }

  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  iniciarSesion(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  
  cerrarSesion(){
    return this.auth.signOut();
  }
  
  async obtenerUid(){
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    } else {
      return user.uid;
    }
  }
  obtenerUsuario(email: string){
    /**
     * retornamos del servicioFirestore la coleccion de 'Usuarios', buscamos una referencia en los email registrados
     * y los comparamos con los que ingrese el usuario al iniciar sesion, y lo obtiene con el '.get()'
     * Lo vuelve una promesa => de un resultado RESUELTO o RECHAZADO
     */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
}



