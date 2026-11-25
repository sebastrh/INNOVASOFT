import { Component, inject, type OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonText, IonCard, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, IonBadge, IonRefresher, IonRefresherContent, type RefresherCustomEvent } from "@ionic/angular";


import type { Publicacion } from '../../interfaces/publicacion';
import { Auth } from '../../services/auth';
import { Publicaciones as publicacionesService } from '../../services/publicaciones';
import { HeaderPage } from '../header/header.page';





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
 imports: [RouterLink,IonRefresherContent, IonRefresher, IonBadge, IonIcon, IonButton, IonLabel, IonItem, IonCardContent, IonCard, IonText, IonContent, HeaderPage],
})
export class InicioPage implements OnInit {
  Auth= inject(Auth);
  Router= inject(Router);
  publicacionesService= inject(publicacionesService);
  

  publicaciones= signal<Publicacion[]>([]);

  ngOnInit():void {
  this.cargarPublicaciones();
  }

  ionViewWillEnter():void{
 void this.cargarPublicaciones();
  }

 async cargarPublicaciones():Promise<void>{
  try{
     const datos= await this.publicacionesService.obtenerPublicaciones();

    
      this.publicaciones.set(
        [...datos]
          .sort((a, b) =>
            b.fecha.localeCompare(a.fecha) ||
            b.hora.localeCompare(a.hora)
          )
          .slice(0, 3)

          
      );


     console.log('Publicaciones Obtenidad', datos);
     console.log('Datos completos de MockAPI:', datos);
    console.log('Primera publicación:', datos[0]);
  }catch(error){
    console.error('Error al cargar las publicaciones:', error);
  }

  }



   handleRefresh(event: RefresherCustomEvent):void {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
