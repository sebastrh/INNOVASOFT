import { inject, Service } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Service()
export class AlertServicesController {
     private alertController = inject(AlertController);

  async mostrarAlerta(
    titulo: string,
    mensaje: string
  ): Promise<void> {

    const alerta = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alerta.present();
  }
}
