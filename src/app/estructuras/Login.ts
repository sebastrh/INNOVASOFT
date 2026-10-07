import type { ILogin } from "./ILogin.js";

export class Login implements ILogin {

    private usuariosArray = [
        {
            correo: "jafet@gmail.com",
            password: "1234",
            nombre: "Jafet"
        },

        {
            correo: "juan@gmail.com",
            password: "5678",
            nombre: "Usuario"
        },
        {
            correo: "admin",
            password: "admin",
            nombre: "Administrador"
        }
    ];

    iniciarSesion(
        correo: string,
        password: string
    ): string | undefined {

        const usuario = this.usuariosArray.find(
            usuario =>
                usuario.correo === correo &&
                usuario.password === password
        );

        if (usuario) {
            return "Bienvenido " + usuario.nombre;
        }

        return undefined;
    }


    cerrarSesion(): string {

        return "Sesión cerrada";

    }


    isEmpty(): boolean {

        return this.usuariosArray.length === 0;

    }

}