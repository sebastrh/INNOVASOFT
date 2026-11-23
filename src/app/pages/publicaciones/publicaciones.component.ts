import { Component } from '@angular/core';


import {
  IonContent,
  IonCard,
  IonCardContent,
  IonBadge
} from '@ionic/angular';

import { Publicaciones } from '../../estructuras/Publicaciones';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  standalone: true,
  imports: [
    
    IonContent,
    IonCard,
    IonCardContent,
    IonBadge
  ]
})
export class PublicacionesComponent {

  publicaciones = new Publicaciones();

  listaPublicaciones: any[] = [];

  constructor() {

    this.publicaciones.agregarPublicacion(
      1,
      'Omelette de vegetales',
      'Instagram',
      '15/05/2025',
      'Programada'
    );

    this.publicaciones.agregarPublicacion(
      2,
      'Beneficios del omelette',
      'Facebook',
      '16/05/2025',
      'Programada'
    );

    this.publicaciones.agregarPublicacion(
      3,
      'Ingredientes frescos',
      'Instagram',
      '18/05/2025',
      'Publicada'
    );

    this.listaPublicaciones =
      this.publicaciones.obtenerPublicaciones();

  }

}