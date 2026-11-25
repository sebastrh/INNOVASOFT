
import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonBadge
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, checkmarkCircleOutline } from 'ionicons/icons';

import type { Paquete } from '../../interfaces/paquete';
import { AlertServicesController } from '../../services/alert';
import { Carrito } from '../../services/carrito';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  imports: [
    HeaderPage,
    IonContent,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonBadge
  ]
})
export class ServiciosPage {

  private carritoService = inject(Carrito);
  private alerta = inject(AlertServicesController);

  // Nuestros paquetes
  paquetes: Paquete[] = [
    {
      id: 1,
      nombre: 'Básico',
      descripcion: 'Ideal para comenzar en redes sociales.',
      piezas: 8,
      precio: 5900
    },
    {
      id: 2,
      nombre: 'Profesional',
      descripcion: 'Para negocios que buscan mayor presencia digital.',
      piezas: 12,
      precio: 9900
    },
    {
      id: 3,
      nombre: 'Premium',
      descripcion: 'Para marcas que necesitan más contenido.',
      piezas: 16,
      precio: 15900
    }
  ];

  constructor() {
    addIcons({
      cartOutline,
      checkmarkCircleOutline
    });
  }

  async agregarCarrito(paquete: Paquete): Promise<void> {

    try {
      const agregado =
        await this.carritoService.agregarPaquete(paquete);

      if (agregado) {
        await this.alerta.mostrarAlerta(
          'Paquete agregado',
          'Se agregó correctamente al carrito.'
        );
      } else {
        await this.alerta.mostrarAlerta(
          'Paquete existente',
          'Este paquete ya está en tu carrito.'
        );
      }

    } catch (error) {
      console.error('Error al agregar paquete:', error);

      await this.alerta.mostrarAlerta(
        'Error',
        'No se pudo guardar el paquete.'
      );
    }
  }
}
