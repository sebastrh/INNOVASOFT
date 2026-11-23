import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  IonButton,
  IonCard,
  IonCardContent,
  IonBadge,
  IonIcon
} from '@ionic/angular';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
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
    IonButton,
    IonCard,
    IonCardContent,
    IonBadge,
    IonIcon
  ]
})
export class PagosPage {

  constructor() {}

}