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
  IonInput,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
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
    IonInput,
    IonTextarea,
    IonCard,
    IonCardContent,
    IonIcon,
    IonLabel,
    IonButton
  ]
})
export class SoportePage {

  constructor() {}

}