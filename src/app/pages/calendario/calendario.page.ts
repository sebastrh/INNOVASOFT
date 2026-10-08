import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
  IonNote,
  IonContent,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent,
  IonBadge,
  IonLabel,
  IonText,
  IonList
} from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonList,
    IonButton,
    IonIcon,
    IonContent,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardContent,
    IonBadge,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonNote,
    IonLabel,
    IonText
  ]
})
export class CalendarioPage {

  constructor() {}

}