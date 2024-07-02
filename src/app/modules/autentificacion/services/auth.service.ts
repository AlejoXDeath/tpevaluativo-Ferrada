import { Injectable } from '@angular/core';
// servicio en la nube de autentificación de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

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
}
