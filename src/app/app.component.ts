import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonItem, IonContent, IonLabel, IonList, IonMenu, IonMenuToggle } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonList, IonLabel, IonContent, IonItem, IonToolbar, IonHeader, IonApp, IonRouterOutlet, IonMenu, IonMenuToggle],
})
export class AppComponent {

  private router= inject(Router);

  constructor() {}

  irPagina(ruta: string):void{
    this.router.navigate([ruta])
  }
}
