
import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { CapacitorHttp } from '@capacitor/core';
import {
  IonContent,
  IonText,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline, cardOutline } from 'ionicons/icons';

import { AlertServicesController} from '../../services/alert';
import { Carrito } from '../../services/carrito';
import { HeaderPage } from '../header/header.page';






@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  imports: [
    HeaderPage,
    IonContent,
    IonText,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    CurrencyPipe
  ]
})
export class PagosPage {

  public carritoService = inject(Carrito);
  private alerta = inject(AlertServicesController);

  constructor() {
    addIcons({
      trashOutline,
      cardOutline
    });
  }

  // Calculamos el IVA
  get iva(): number {
    return this.carritoService.subtotal() * 0.16;
  }

  // Calculamos el total
  get total(): number {
    return this.carritoService.subtotal() + this.iva;
  }

  // Eliminar paquete del carrito
  async eliminarPaquete(id: number): Promise<void> {

    await this.carritoService.eliminarPaquete(id);

    await this.alerta.mostrarAlerta(
      'Paquete eliminado',
      'El paquete se eliminó del carrito.'
    );
  }


async pagarMercadoPago(): Promise<void> {

  try {

    // Obtener los IDs de los paquetes del carrito
    const ids = this.carritoService.carrito().map(
      paquete => paquete.id
    );

    if (ids.length === 0) {
      return;
    }

    // Enviar los paquetes a nuestro servidor
    const respuesta = await CapacitorHttp.post({
      url: 'http://localhost:3000/crear-pago',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        ids: ids
      }
    });

    if (
      respuesta.status < 200 ||
      respuesta.status >= 300 ||
      !respuesta.data?.checkout_url
    ) {
      throw new Error('No se pudo crear la orden');
    }

    // Abrir el checkout de Mercado Pago
    await Browser.open({
      url: respuesta.data.checkout_url
    });

  } catch (error) {

    console.error('Error al iniciar el pago:', error);

    await this.alerta.mostrarAlerta(
      'Error',
      'No se pudo abrir Mercado Pago.'
    );
  }
}

  
}
