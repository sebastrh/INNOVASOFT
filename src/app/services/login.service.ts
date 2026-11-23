import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  iniciarSesion(usuario: string, contrasena: string): boolean {

    if (usuario === 'cliente' && contrasena === '1234') {
      return true;
    }

    return false;
  }

}