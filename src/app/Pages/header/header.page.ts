import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButtons, IonContent, IonHeader,IonBadge, IonMenuButton, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonPopover } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  personOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
  arrowForwardOutline,
  logOutOutline,
   cartOutline
} from 'ionicons/icons'

import { Auth } from '../../services/auth';
import { Carrito } from '../../services/carrito';


@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
 imports: [IonPopover,IonBadge, IonIcon, IonButton, IonLabel, IonItem, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonToolbar ],
})
export class HeaderPage  {
  Auth= inject(Auth);
  Router= inject(Router);

  constructor() {
    addIcons({
      personOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,
      arrowForwardOutline,
      logOutOutline,
       cartOutline
    });
  }

  cerrarSesion():void {
    this.Auth.cerrarSesion();
    // Redirigir al usuario al login después de cerrar sesión
    this.Router.navigate(['/login']);

  }

  perfil():void{
    this.Router.navigate(['/perfil']);
  }



popoverAbierto = false;
eventoPopover?: Event;

abrirPopover(evento: Event): void {
  this.eventoPopover = evento;
  this.popoverAbierto = true;
}


private carritoService = inject(Carrito);

// Cantidad de paquetes en el carrito
cantidadCarrito = computed(() =>
  this.carritoService.carrito().length
);


irCarrito(): void {
  this.Router.navigate(['/pagos']);
}


}
