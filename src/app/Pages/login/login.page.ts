import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonRow, IonText } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  personOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
  arrowForwardOutline,
} from 'ionicons/icons';

import { AlertServicesController } from '../../services/alert';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
  ],
})
export class LoginPage {




  readonly loginForm= new FormGroup ({
    username: new FormControl('',[Validators.required, Validators.minLength(3),
       Validators.maxLength(20),
      Validators.pattern(/\S/)],
      ),
    password: new FormControl('', [Validators.required,
       Validators.minLength(3),
        Validators.maxLength(10)])
  });


  private router=inject(Router);
  private auth= inject(Auth);
  private alerta = inject(AlertServicesController);

  protected invalido(campo: string): boolean {
    const control=this.loginForm.get(campo);
    return !!control && control.touched && control.invalid;
  }

  mensaje: string='';

  constructor() {
    addIcons({
    personOutline,
    lockClosedOutline,
    eyeOutline,
    eyeOffOutline,
    arrowForwardOutline,
    
  });
  }

 
        
      //   this.auth.login(this.username, this.password).subscribe({

      //   next: (respuesta: { token: string })=> {
      //     localStorage.setItem('token',respuesta.token);

      //     this.router.navigate(['/home']);
      //   },

      //   error: () => {
      //     this.mensaje='Usuario o contraseña incorrectos';
      //   }
      // });

  

  mostrarContrasena: boolean = false;
 



  async iniciarSesion():Promise<void> {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      
      // this.mensaje='Por favor, complete todos los campos correctamente.';
      return;
    }

    console.log('Formulario válido. Iniciando sesión...');
    const {username, password}= this.loginForm.value;
    const exito= await this.auth.iniciarSesion(username??'', password??'');
    if(exito){
    this.router.navigate(['/inicio']);
    this.loginForm.reset();
    } else{
      this.alerta.mostrarAlerta(
        'Inicio de sesion fallido',
        'Usuario o contraseña incorrectos'
      );
      //this.loginForm.reset();
    }
   
  }
}