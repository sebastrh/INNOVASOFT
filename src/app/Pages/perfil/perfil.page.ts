import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonText, IonCard, IonItem, IonCardContent, IonLabel, IonBadge } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  personCircleOutline,
  personOutline,
  businessOutline,
  mailOutline,
  callOutline,
  cubeOutline
} from 'ionicons/icons';

import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonBadge, IonLabel, IonCardContent, IonItem, IonCard, IonText, IonIcon, IonContent  , CommonModule, FormsModule, HeaderPage],
})
export class PerfilPage  {
  constructor() {
     addIcons({
    arrowBackOutline,
    personCircleOutline,
    personOutline,
    businessOutline,
    mailOutline,
    callOutline,
    cubeOutline
  });
  }


}
