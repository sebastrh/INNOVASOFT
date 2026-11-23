import { LoginPage } from "./pages/login/login.page";
import { InicioPage } from "./pages/inicio/inicio.page";
import { PublicacionesPage } from "./pages/publicaciones/publicaciones.component";

console.log("=== LOGIN ===");

const login = new LoginPage();

console.log(
  login.iniciarSesion(
    "cliente@gmail.com",
    "1234"
  )
);

console.log(
  "¿Login vacío?",
  login.isEmpty()
);


console.log("\n=== INICIO ===");

const inicio = new InicioPage();

inicio.agregarPublicacion(
  "Omelette de vegetales"
);

inicio.agregarPublicacion(
  "Beneficios del omelette"
);

inicio.mostrarPublicaciones();

console.log(
  "¿Inicio vacío?",
  inicio.isEmpty()
);


console.log("\n=== PUBLICACIONES ===");

const publicaciones = new PublicacionesPage();

publicaciones.agregarPublicacion(
  1,
  "Omelette de vegetales",
  "Instagram",
  "15/05/2025",
  "Programada"
);

publicaciones.agregarPublicacion(
  2,
  "Beneficios del omelette",
  "Facebook",
  "16/05/2025",
  "Programada"
);

publicaciones.agregarPublicacion(
  3,
  "Ingredientes frescos",
  "Instagram",
  "18/05/2025",
  "Publicada"
);

publicaciones.mostrarPublicaciones();

console.log(
  publicaciones.buscarPublicacion(
    "Omelette de vegetales"
  )
);

console.log(
  "¿Publicaciones vacío?",
  publicaciones.isEmpty()
);