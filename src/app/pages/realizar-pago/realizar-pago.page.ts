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
  IonSegment,
  IonSegmentButton,
  IonInput,
  IonIcon,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-realizar-pago',
  templateUrl: './realizar-pago.page.html',
  styleUrls: ['./realizar-pago.page.scss'],
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
    IonSegment,
    IonSegmentButton,
    IonInput,
    IonIcon,
    IonButton
  ]
})
export class RealizarPagoPage {

  constructor() {}

}