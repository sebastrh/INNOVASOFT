
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
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/.*\S.*/)
      ]
    }),
    descripcion: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
        Validators.pattern(/.*\S.*/)
      ]
    }),
    cliente: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
        Validators.pattern(/.*\S.*/)
      ]
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

    if (this.guardando) {
      return;
    }

    const titulo = this.formulario.controls.titulo.value.trim();
    const descripcion = this.formulario.controls.descripcion.value.trim();
    const cliente = this.formulario.controls.cliente.value.trim();

    this.formulario.patchValue({
      titulo,
      descripcion,
      cliente
    });

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();

      await this.alerta.mostrarAlerta(
        'Formulario inválido',
        'Revisa los campos. No pueden contener solo espacios y deben cumplir con la longitud requerida.'
      );

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
