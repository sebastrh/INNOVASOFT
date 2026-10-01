export interface Pago {
  id: number;
  facturaId: number;
  metodoPago: string;
  monto: number;
  fecha: string;
  estado: string;
}