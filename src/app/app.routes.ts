import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./pages/calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'detalle-publicacion',
    loadComponent: () => import('./pages/detalle-publicacion/detalle-publicacion.page').then( m => m.DetallePublicacionPage)
  },
  {
    path: 'pagos',
    loadComponent: () => import('./pages/pagos/pagos.page').then( m => m.PagosPage)
  },
  {
    path: 'realizar-pago',
    loadComponent: () => import('./pages/realizar-pago/realizar-pago.page').then( m => m.RealizarPagoPage)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./pages/reportes/reportes.page').then( m => m.ReportesPage)
  },
  {
    path: 'detalle-reporte',
    loadComponent: () => import('./pages/detalle-reporte/detalle-reporte.page').then( m => m.DetalleReportePage)
  },
  {
    path: 'mi-cuenta',
    loadComponent: () => import('./pages/mi-cuenta/mi-cuenta.page').then( m => m.MiCuentaPage)
  },
  {
    path: 'soporte',
    loadComponent: () => import('./pages/soporte/soporte.page').then( m => m.SoportePage)
  },

];
