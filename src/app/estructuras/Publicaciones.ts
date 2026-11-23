import type { IPublicaciones } from "./IPublicaciones";

export class Publicaciones implements IPublicaciones {

    private publicacionesArray: {
        id: number;
        titulo: string;
        redSocial: string;
        fecha: string;
        estado: string;
    }[] = [];


    agregarPublicacion(
        id: number,
        titulo: string,
        redSocial: string,
        fecha: string,
        estado: string
    ): void {

        this.publicacionesArray.push({
            id: id,
            titulo: titulo,
            redSocial: redSocial,
            fecha: fecha,
            estado: estado
        });

    }


    buscarPublicacion(
        titulo: string
    ): string | undefined {

        const publicacion =
            this.publicacionesArray.find(
                publicacion =>
                    publicacion.titulo === titulo
            );

        if (publicacion) {

            return (
                publicacion.titulo +
                " - " +
                publicacion.estado
            );

        }

        return undefined;
    }


    eliminarPublicacion(
        id: number
    ): void {

        const posicion =
            this.publicacionesArray.findIndex(
                publicacion =>
                    publicacion.id === id
            );

        if (posicion !== -1) {

            this.publicacionesArray.splice(
                posicion,
                1
            );

        }

    }


    mostrarPublicaciones(): void {

        console.dir(
            this.publicacionesArray,
            {
                depth: null,
                colors: true
            }
        );

    }

    obtenerPublicaciones() {

    return this.publicacionesArray;

}


    isEmpty(): boolean {

        return this.publicacionesArray.length === 0;

    }

}