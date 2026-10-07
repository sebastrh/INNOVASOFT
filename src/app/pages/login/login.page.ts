import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';

import { Login } from '../../estructuras/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class LoginPage {

  usuario: string = '';
  contrasena: string = '';

  private login = new Login();
  private router = inject(Router);

  iniciarSesion(): void {

    const resultado = this.login.iniciarSesion(
      this.usuario,
      this.contrasena
    );

    if (resultado) {

      console.log(resultado);

      this.router.navigate(['/inicio']);

    } else {

      alert('Usuario o contraseña incorrectos');

    }

  }
}