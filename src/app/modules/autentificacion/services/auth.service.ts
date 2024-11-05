import { Injectable } from '@angular/core';
// servicio en la nube de autentificación de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'
// Observables para obtener cambios
import { Observable } from 'rxjs';
// Itera colección leyendo información actual
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Propiedad privada para guardar rol de usuario
  private rolUsuario: string | null = null;

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

  obtenerRol(uid: string): Observable <string | null> {
    /* Accedemos a colección de usuarios, buscnado por UID, obteniendo cambios en valores.
    Al enviar info. por tubería, "mapeamos" la colección, obtenemos  un usuario especifico
    y buscamos su atributo "rol", aún si este es "nulo"
    */
    return this.servicioFirestore.collection("usuarios").doc(uid).valueChanges()
    .pipe(map((usuario: any) => usuario ? usuario.rol: null));
  }

  // Enviar el rol obtenido -> asignarlo al rol de la variable local
  setUsuarioRol(rol: string){
    this.rolUsuario = rol;
  }
  // Obtener el rol y asignarlo al rol en la variable local
  getUsuarioRol(): string | null {
    return this.rolUsuario;
  }
}



