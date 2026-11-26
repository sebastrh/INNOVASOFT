# Marketing Manager

**Aplicación móvil para la gestión de publicaciones, servicios y pagos de una agencia de marketing digital.**

Marketing Manager es un proyecto desarrollado por el equipo **InnovaSoft**, con el propósito de facilitar la organización y consulta de publicaciones en redes sociales, así como la administración de servicios de marketing digital.

La aplicación está desarrollada con **Ionic, Angular y Capacitor**, permitiendo su ejecución en un navegador web y en dispositivos Android.

## Objetivo del proyecto

Desarrollar una aplicación móvil que permita a los clientes de una agencia de marketing digital consultar sus publicaciones, visualizar servicios disponibles, administrar un carrito de compras y acceder a una plataforma de pagos.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Ionic | Componentes e interfaz móvil |
| Angular | Desarrollo de la aplicación |
| TypeScript | Lógica y programación |
| Capacitor | Integración con Android |
| CapacitorHttp | Comunicación con APIs |
| Capacitor Preferences | Almacenamiento local |
| MockAPI | Gestión de publicaciones |
| FakeStore API | Autenticación de prueba |
| Node.js | Ejecución del servidor |
| Express | Backend para pagos |
| Mercado Pago API | Creación de órdenes de pago |
| Git y GitHub | Control de versiones |

## Funcionalidades

### Inicio de sesión
- Autenticación mediante FakeStore API.
- Validación de usuario y contraseña.
- Opción para mostrar u ocultar la contraseña.
- Almacenamiento local del token de sesión.
- Cierre de sesión.

### Inicio
- Pantalla principal con información general.
- Visualización de publicaciones recientes.
- Acceso a las secciones principales.
- Actualización de publicaciones.

### Publicaciones
- Consultar publicaciones registradas.
- Crear nuevas publicaciones.
- Editar publicaciones existentes.
- Eliminar publicaciones.
- Validación de formularios.
- Comunicación con MockAPI mediante operaciones GET, POST, PUT y DELETE.

### Calendario
- Visualización de publicaciones por fecha.
- Consulta de publicaciones programadas.
- Acceso al detalle de cada publicación.

### Servicios
- Consulta de paquetes de marketing digital.
- Visualización de precios y características.
- Selección de servicios disponibles.

### Carrito de compras
- Agregar paquetes.
- Eliminar paquetes.
- Calcular el total de compra.
- Conservar los paquetes utilizando Capacitor Preferences.

### Pagos
- Resumen de los paquetes seleccionados.
- Cálculo del subtotal e IVA.
- Conexión con un backend desarrollado en Node.js y Express.
- Creación de órdenes de prueba mediante Mercado Pago.
- Redirección al checkout de Mercado Pago.

**Nota:** la integración de Mercado Pago se utiliza en un entorno de pruebas. La apertura del checkout no implica que se haya completado un pago.

### Otras secciones
- Reportes de seguidores, interacción y reproducciones.
- Mi cuenta.
- Soporte.
- Menú lateral de navegación.

## Paquetes de servicios

| Paquete | Precio mensual | Publicaciones |
|---|---:|---:|
| Básico | $5,900 MXN | 8 piezas |
| Profesional | $9,900 MXN | 12 piezas |
| Premium | $15,900 MXN | 16 piezas |

Los paquetes tienen una duración de un mes y renovación manual. Incluyen servicios de estrategia digital y Meta Ads según la propuesta del proyecto.

## Instalación del proyecto

### Requisitos

- Node.js y npm.
- Ionic CLI.
- Android Studio para compilar la aplicación Android.
- Git.

### Clonar el repositorio

```bash
git clone https://github.com/sebastrh/INNOVASOFT.git
cd INNOVASOFT
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar la aplicación

```bash
npx ionic serve
```

La aplicación se abrirá en el navegador.

## Configuración del backend de pagos

El backend permite crear órdenes de pago mediante la API de Mercado Pago.

### Instalar dependencias

Desde la carpeta principal del proyecto:

```bash
cd backend_pagos
npm install
```

### Configurar variables de entorno

Crear un archivo `.env` dentro de `backend_pagos` con el siguiente contenido:

```env
MP_ACCESS_TOKEN=TU_ACCESS_TOKEN_DE_PRUEBA
```

**Importante:** nunca subir el archivo `.env` ni compartir el Access Token en GitHub.

### Ejecutar el servidor

```bash
node server.js
```

El servidor se ejecuta localmente en el puerto `3000`, salvo que se configure otro puerto.

### Comprobar el servidor

Abrir en el navegador:

```text
http://localhost:3000/prueba
```

## Ejecución en Android

Compilar la aplicación:

```bash
npx ionic build
```

Sincronizar los archivos con Android:

```bash
npx cap sync android
```

Abrir Android Studio:

```bash
npx cap open android
```

Desde Android Studio se puede ejecutar la aplicación en un dispositivo o generar una APK para pruebas.

**Conexión con el backend:** si el servidor se ejecuta en una computadora de la red local, la aplicación Android debe utilizar la dirección IP de esa computadora. Ambos dispositivos deben estar conectados a la misma red y el servidor debe permanecer encendido.

## APIs utilizadas

**MockAPI:** proporciona un servicio de prueba para registrar, consultar, actualizar y eliminar publicaciones.

**FakeStore API:** se utiliza para demostrar el inicio de sesión mediante credenciales de prueba.

**Mercado Pago:** permite crear órdenes de prueba y abrir el checkout. Los resultados de pago deben verificarse mediante la API correspondiente.

## Control de versiones

El proyecto utiliza Git y GitHub para el trabajo colaborativo.

El equipo puede desarrollar funcionalidades mediante ramas independientes y utilizar Pull Requests para revisar e integrar modificaciones.

Se recomienda mantener protegida la rama principal y verificar los cambios antes de integrarlos.

## Seguridad

- No publicar Access Tokens ni contraseñas.
- Excluir archivos `.env` del repositorio.
- No subir carpetas `node_modules`.
- Mantener las credenciales de Mercado Pago en el backend.
- Utilizar exclusivamente tarjetas ficticias durante las pruebas de pago.
- Utilizar HTTPS y almacenamiento seguro de credenciales en un entorno de producción.

## Equipo de desarrollo

**InnovaSoft**

Proyecto académico de Desarrollo de Software Multiplataforma.

## Estado del proyecto

**Versión académica de demostración.**

La aplicación incluye funcionalidades de navegación, autenticación de prueba, administración de publicaciones, consulta de servicios, carrito de compras e integración experimental con Mercado Pago.

Algunas secciones son demostrativas y no representan un sistema comercial listo para producción.
