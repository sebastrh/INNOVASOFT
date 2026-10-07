import type { IRegistro } from "./IRegistro.js";

export class Registro implements IRegistro {

    private usuariosArray: {
        nombre: string;
        correo: string;
        password: string;
        telefono: string;
    }[] = [];


    agregarUsuario(
        nombre: string,
        correo: string,
        password: string,
        telefono: string
    ): void {

        this.usuariosArray.push({

            nombre: nombre,
            correo: correo,
            password: password,
            telefono: telefono

        });

    }


    mostrarUsuarios(): void {

        console.dir(
            this.usuariosArray,
            {
                depth: null,
                colors: true
            }
        );

    }


    isEmpty(): boolean {

        return this.usuariosArray.length === 0;

    }

}