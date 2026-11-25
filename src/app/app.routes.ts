import type { Routes } from '@angular/router';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./Pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'inicio',
    loadComponent: () => import('./Pages/inicio/inicio.page').then((m) => m.InicioPage),
    canActivate: [authGuard],
  },
  {
    path: 'publicaciones',
    loadComponent: () => import('./Pages/publicaciones/publicaciones.page').then((m) => m.PublicacionesPage),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: 'servicios',
    loadComponent: () => import('./Pages/servicios/servicios.page').then((m) => m.ServiciosPage),
    canActivate: [authGuard],
  },
  {
    path: 'detalle-publicacion/:id',
    loadComponent: () =>
      import('./Pages/detalle-publicacion/detalle-publicacion.page').then((m) => m.DetallePublicacionPage),
    canActivate: [authGuard],
  },
  {
    path: 'crear-publicacion',
    loadComponent: () => import('./Pages/crear-publicacion/crear-publicacion.page').then((m) => m.CrearPublicacionPage),
    canActivate: [authGuard],
  },
  {
    path: 'reportes',
    loadComponent: () => import('./Pages/reportes/reportes.page').then((m) => m.ReportesPage),
    canActivate: [authGuard],
  },
  {
    path: 'soporte',
    loadComponent: () => import('./Pages/soporte/soporte.page').then((m) => m.SoportePage),
    canActivate: [authGuard],
  },
  {
    path: 'perfil',
    loadComponent: () => import('./Pages/perfil/perfil.page').then((m) => m.PerfilPage),
    canActivate: [authGuard],
  },
  {
    path: 'pagos',
    loadComponent: () => import('./Pages/pagos/pagos.page').then((m) => m.PagosPage),
    canActivate:[authGuard],
  },
];

// Definición de rutas principales de la aplicación
