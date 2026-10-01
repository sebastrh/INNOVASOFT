export interface Factura {
  id: number;
  codigo: string;
  periodo: string;
  servicio: string;
  total: number;
  estado: string;
  fechaVencimiento: string;
}