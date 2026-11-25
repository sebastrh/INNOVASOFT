import { CommonModule } from '@angular/common';
import { Component, inject, signal, type OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ActivatedRoute,} from '@angular/router';
import {
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,IonContent, IonButton, IonCard, IonCardContent, IonItem, IonLabel, IonBadge, 
  NavController, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline
} from 'ionicons/icons'


import type { Publicacion } from '../../interfaces/publicacion';
import { AlertServicesController } from '../../services/alert';
import { Publicaciones } from '../../services/publicaciones';
  import { HeaderPage } from '../header/header.page';







@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.page.html',
  styleUrls: ['./detalle-publicacion.page.scss'],
  imports: [IonIcon, IonIcon, IonBadge, IonLabel, IonItem, IonCardContent, IonCard, IonButton, IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption, HeaderPage],
})
export class DetallePublicacionPage implements OnInit {
  constructor() {
    addIcons({
      arrowBackOutline
    })
  }
  
  private alerta = inject(AlertServicesController);
  private navCtrl = inject(NavController);
  private route = inject(ActivatedRoute);
  private publicacionesService = inject(Publicaciones);
  publicacion = signal<Publicacion | null>(null);

//Formularioo para editar y la variable para ver si estamos en el modo editar
modoEdicion = false;

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

  plataforma: new FormControl('', {
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

  estado: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  })
});

//Traemos la funcion de cargar publicacion
async cargarPublicacion(id: string): Promise<void> {
  try {
    console.log('Consultando publicación con ID:', id);

    const datos = await this.publicacionesService.obtenerPublicacion(id);


    this.publicacion.set(datos);

    this.formulario.patchValue({
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      cliente: datos.cliente,
      plataforma: datos.plataforma,
      fecha: datos.fecha,
      hora: datos.hora,
      estado: datos.estado
    });

  } catch (error) {
    console.error('Error al obtener publicación:', error);
  }
}

//Funcion de regresar (Te regrea a la pantalla anterior a donde estaba con el navbar control)
regresar(): void {
   this.navCtrl.back();
}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');


  if (id) {
    void this.cargarPublicacion(id);
  } else {
    console.error('No se encontró el ID en la URL');
  }
}

//Guardar cambios
async guardarCambios(): Promise<void> {

  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }

  const actual = this.publicacion();

  if (!actual) {
    return;
  }

  try {
    const datos = this.formulario.getRawValue();

    const actualizada =
      await this.publicacionesService.actualizarPublicacion(
        actual.id,
        datos
      );

    this.publicacion.set(actualizada);
    this.modoEdicion = false;

    console.log('Cambios guardados correctamente');

  } catch (error) {
    console.error('Error al guardar cambios:', error);
  }
}


async eliminarPublicacion(): Promise<void> {

  const actual = this.publicacion();

  if (!actual) {
    return;
  }

  try {
    await this.publicacionesService.eliminarPublicacion(actual.id);

    await this.alerta.mostrarAlerta(
      'Publicación eliminada',
      'La publicación se eliminó correctamente.'
    );

    this.regresar();

  } catch (error) {
    console.error('Error al eliminar publicación:', error);

    await this.alerta.mostrarAlerta(
      'Error',
      'No se pudo eliminar la publicación.'
    );
  }
}




}
