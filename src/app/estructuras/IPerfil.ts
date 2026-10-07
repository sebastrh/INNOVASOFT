export interface IPerfil {

    guardarPerfil(
        nombre: string,
        correo: string,
        telefono: string
    ): void;

    mostrarPerfil(): void;

    isEmpty(): boolean;
}