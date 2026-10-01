
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

import { LoginService } from '../../services/login.service';

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

  private loginService = inject(LoginService);
  private router = inject(Router);

  constructor() {}

  iniciarSesion() {

    const acceso = this.loginService.iniciarSesion(
      this.usuario,
      this.contrasena
    );

    if (acceso) {

      this.router.navigate(['/inicio']);

    } else {

      alert('Usuario o contraseña incorrectos');

    }

  }

}