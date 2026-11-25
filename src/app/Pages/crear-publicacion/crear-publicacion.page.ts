
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonText,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonTextarea,
  IonInput
} from '@ionic/angular';

import { AlertServicesController } from '../../services/alert';
import { Publicaciones } from '../../services/publicaciones';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
  imports: [
    IonButton,
    ReactiveFormsModule,
    IonItem,
    IonText,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderPage,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonInput
  ],
})
export class CrearPublicacionPage {

  private publicacionesService = inject(Publicaciones);
  private router = inject(Router);
  private alerta = inject(AlertServicesController);

  guardando = false;

  formulario = new FormGroup({
    titulo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    descripcion: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    cliente: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    plataforma: new FormControl('Instagram', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    fecha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    hora: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    estado: new FormControl('Programada', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  async crearPublicacion(): Promise<void> {

    if (this.formulario.invalid || this.guardando) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.guardando = true;

    try {

      await this.publicacionesService.crearPublicacion(
        this.formulario.getRawValue()
      );

      await this.alerta.mostrarAlerta(
        'Publicación creada',
        'La publicación se guardó correctamente.'
      );

      await this.router.navigate(['/publicaciones']);

    } catch (error) {

      console.error('Error al crear publicación:', error);

      await this.alerta.mostrarAlerta(
        'Error',
        'No se pudo guardar la publicación.'
      );

    } finally {
      this.guardando = false;
    }
  }


cancelar(): void {
  this.router.navigate(['/publicaciones']);
}

}
