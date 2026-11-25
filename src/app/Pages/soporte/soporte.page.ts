import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonIcon, IonButton, IonText, IonItem, IonInput, IonTextarea, IonNote, IonCard, IonCardContent, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, callOutline, mailOutline, timeOutline } from 'ionicons/icons';

import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
  imports: [IonLabel, IonCardContent, IonCard, IonNote, IonTextarea, IonInput, IonItem, IonText, IonButton, IonIcon, IonContent, CommonModule, FormsModule,HeaderPage],
})
export class SoportePage  {
  constructor() {
     addIcons({
    arrowBackOutline,
    mailOutline,
    callOutline,
    timeOutline
  });
  }

 
}
