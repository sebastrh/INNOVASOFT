import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonText, IonItem, IonIcon, IonInput, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardContent, IonBadge } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  searchOutline,
  statsChartOutline,
  statsChart,
  chevronDownOutline,
  chevronBackOutline,
  people,
  play,
  arrowForwardOutline
} from 'ionicons/icons';

import { HeaderPage } from '../header/header.page';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  imports: [IonBadge, IonCardContent, IonCard, IonButton, IonCol, IonRow, IonGrid, IonLabel, IonInput, IonIcon, IonItem, IonText, IonContent, CommonModule, FormsModule, HeaderPage],
})
export class ReportesPage  {
  constructor() {
     addIcons({
    searchOutline,
    statsChartOutline,
    statsChart,
    chevronDownOutline,
    chevronBackOutline,
    people,
    play,
    arrowForwardOutline
  });
  }


}
