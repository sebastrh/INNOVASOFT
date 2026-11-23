export interface IPublicaciones {

    agregarPublicacion(
        id: number,
        titulo: string,
        redSocial: string,
        fecha: string,
        estado: string
    ): void;

    buscarPublicacion(
        titulo: string
    ): string | undefined;

    eliminarPublicacion(
        id: number
    ): void;

    mostrarPublicaciones(): void;

    obtenerPublicaciones(): {
    id: number;
    titulo: string;
    redSocial: string;
    fecha: string;
    estado: string;
}[];

    isEmpty(): boolean;
}