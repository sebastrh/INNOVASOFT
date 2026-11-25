import { Injectable } from '@angular/core';
import {CapacitorHttp} from '@capacitor/core'


import type { Publicacion } from '../interfaces/publicacion';


@Injectable({
    providedIn: 'root'
})
export class Publicaciones {
    private apiUrl = 'https://6af3c92d55a1de7dcf0342fc.mockapi.io/api/v1/Publicaciones';

    async obtenerPublicaciones(): Promise<Publicacion[]>{
      const respuesta= await CapacitorHttp.get({
        url: this.apiUrl
      });

      if(respuesta.status<200 || respuesta.status >= 300){
        throw new Error('Error al obtener publicaciones');
      }

      return respuesta.data as Publicacion[]

    }


    //Esta es la funcion con la que mandaremos a traer el detalle de publicaciones con el id
   
async obtenerPublicacion(id: string): Promise<Publicacion> {

  const url = `${this.apiUrl}/${id}`;

  

  const respuesta = await CapacitorHttp.get({
    url: url
  });


  if (respuesta.status < 200 || respuesta.status >= 300) {
    throw new Error(
      `Error al obtener publicación. HTTP: ${respuesta.status}`
    );
  }

  return respuesta.data as Publicacion;
}


//Update de publicacion para el crud

async actualizarPublicacion(
  id: string,
  datos: Partial<Publicacion>
): Promise<Publicacion> {

  const respuesta = await CapacitorHttp.put({
    url: `${this.apiUrl}/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: datos
  });

  if (respuesta.status < 200 || respuesta.status >= 300) {
    throw new Error('Error al actualizar publicación');
  }

  return respuesta.data as Publicacion;
}

//Eliminar Publicacion (Delete)

async eliminarPublicacion(id: string): Promise<void> {

  const respuesta = await CapacitorHttp.delete({
    url: `${this.apiUrl}/${id}`
  });

  if (respuesta.status < 200 || respuesta.status >= 300) {
    throw new Error('Error al eliminar publicación');
  }
}

//Crear publicaciones

async crearPublicacion(
  datos: Omit<Publicacion, 'id'>
): Promise<Publicacion> {

  const respuesta = await CapacitorHttp.post({
    url: this.apiUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: datos
  });

  if (respuesta.status < 200 || respuesta.status >= 300) {
    throw new Error('Error al crear publicación');
  }

  return respuesta.data as Publicacion;
}

   

}
