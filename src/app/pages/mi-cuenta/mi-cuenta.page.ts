import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MiCuentaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
