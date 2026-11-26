
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  personOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
  arrowForwardOutline
} from 'ionicons/icons';

import { AlertServicesController } from '../../services/alert';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  ],
})
export class LoginPage {

  private router = inject(Router);
  private auth = inject(Auth);
  private alerta = inject(AlertServicesController);

  mostrarContrasena = false;
  guardando = false;
  mensaje = '';

  readonly loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(/.*\S.*/)
      ]
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(/.*\S.*/)
      ]
    })
  });

  constructor() {
    addIcons({
      personOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,
      arrowForwardOutline
    });
  }

  protected invalido(campo: string): boolean {
    const control = this.loginForm.get(campo);

    return !!control && control.touched && control.invalid;
  }

  async iniciarSesion(): Promise<void> {

    if (this.guardando) {
      return;
    }

    // Eliminar espacios sobrantes del usuario
    const username = this.loginForm.controls.username.value.trim();

    // No modificar la contraseña
    const password = this.loginForm.controls.password.value;

    this.loginForm.controls.username.setValue(username);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.guardando = true;

    try {

      const exito = await this.auth.iniciarSesion(
        username,
        password
      );

      if (exito) {

        await this.router.navigate(['/inicio']);

        this.loginForm.reset();

      } else {

        await this.alerta.mostrarAlerta(
          'Inicio de sesión fallido',
          'Usuario o contraseña incorrectos'
        );

      }

    } catch (error) {

      console.error('Error al iniciar sesión:', error);

      await this.alerta.mostrarAlerta(
        'Error',
        'No se pudo iniciar sesión. Inténtalo nuevamente.'
      );

    } finally {

      this.guardando = false;

    }
  }
}
