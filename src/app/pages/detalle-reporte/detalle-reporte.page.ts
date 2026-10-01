import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-detalle-reporte',
  templateUrl: './detalle-reporte.page.html',
  styleUrls: ['./detalle-reporte.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalleReportePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
