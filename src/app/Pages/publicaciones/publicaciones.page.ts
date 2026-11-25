import { CommonModule } from '@angular/common';
import { Component, type OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonItem, IonLabel, IonBadge, IonIcon, IonText, IonButton } from "@ionic/angular";

import type { Publicacion } from '../../interfaces/publicacion';
import { Publicaciones as PublicacionesServices } from '../../services/publicaciones';
import { HeaderPage } from '../header/header.page';




@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
  imports: [IonButton, IonText, IonIcon, RouterLink,IonBadge, IonLabel, IonItem, IonContent, CommonModule, FormsModule, HeaderPage],
})
export class PublicacionesPage implements OnInit {
  constructor() {}

  publicacionesService= inject(PublicacionesServices);
  publicaciones= signal<Publicacion[]>([]);
  private router= inject(Router);


  ngOnInit():void {
    this.cargarPublicaciones();
  }
  ionViewWillEnter():void{
 void this.cargarPublicaciones();
  }

 async cargarPublicaciones(): Promise<void> {
  try {
    const datos = await this.publicacionesService.obtenerPublicaciones();

    this.publicaciones.set(
      [...datos].sort((a, b) =>
        b.fecha.localeCompare(a.fecha) ||
        b.hora.localeCompare(a.hora)
      )
    );

  } catch (error) {
    console.error('Error al cargar publicaciones:', error);
  }
}
 irPagina(ruta: string):void{
    this.router.navigate([ruta])
  }

}
