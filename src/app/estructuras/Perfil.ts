import type { IPerfil } from "./IPerfil.js";

export class Perfil implements IPerfil {

    private perfilArray: {
        nombre: string;
        correo: string;
        telefono: string;
    }[] = [];


    guardarPerfil(
        nombre: string,
        correo: string,
        telefono: string
    ): void {

        this.perfilArray.push({

            nombre: nombre,
            correo: correo,
            telefono: telefono

        });

    }


    mostrarPerfil(): void {

        console.dir(
            this.perfilArray,
            {
                depth: null,
                colors: true
            }
        );

    }


    isEmpty(): boolean {

        return this.perfilArray.length === 0;

    }

}