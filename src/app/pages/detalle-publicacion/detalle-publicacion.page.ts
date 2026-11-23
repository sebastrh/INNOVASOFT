import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonNote,
  IonBadge,
  IonCard,
  IonCardContent,
  IonTextarea,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.page.html',
  styleUrls: ['./detalle-publicacion.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonNote,
    IonBadge,
    IonCard,
    IonCardContent,
    IonTextarea,
    IonButton
  ]
})
export class DetallePublicacionPage {

  constructor() {}

}