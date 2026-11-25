import { Service, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

import type{ Paquete } from '../interfaces/paquete';

@Service()
export class Carrito {
     carrito = signal<Paquete[]>([]);

  private KEY_CARRITO = 'carrito_marketing_manager';

  // Recuperar los datos guardados
  private cargaInicial: Promise<void>;

  constructor() {
    this.cargaInicial = this.recuperarCarrito();
  }

  async recuperarCarrito(): Promise<void> {

    const resultado = await Preferences.get({
      key: this.KEY_CARRITO
    });

    if (resultado.value !== null) {
      try {
        this.carrito.set(JSON.parse(resultado.value));
      } catch (error) {
        console.error('Error al recuperar carrito:', error);
      }
    }
  }

  // Guardar todo el arreglo como JSON
  async guardarCarrito(): Promise<void> {

    await Preferences.set({
      key: this.KEY_CARRITO,
      value: JSON.stringify(this.carrito())
    });
  }

  // Agregar un paquete
  async agregarPaquete(paquete: Paquete): Promise<boolean> {

    await this.cargaInicial;

    const existe = this.carrito().some(
      item => item.id === paquete.id
    );

    if (existe) {
      return false;
    }

    this.carrito.update(actual => [...actual, paquete]);

    await this.guardarCarrito();

    return true;
  }

  // Eliminar un paquete
  async eliminarPaquete(id: number): Promise<void> {

    await this.cargaInicial;

    this.carrito.update(actual =>
      actual.filter(item => item.id !== id)
    );

    await this.guardarCarrito();
  }

  // Cantidad de paquetes
  cantidad(): number {
    return this.carrito().length;
  }

  // Suma de los precios
  subtotal(): number {
    return this.carrito().reduce(
      (total, paquete) => total + paquete.precio,
      0
    );
  }
}
