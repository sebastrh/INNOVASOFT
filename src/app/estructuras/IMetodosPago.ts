export interface IMetodosPago {

    agregarMetodo(
        tipo: string,
        titular: string,
        terminacion: string
    ): void;

    eliminarMetodo(
        terminacion: string
    ): void;

    mostrarMetodos(): void;

    isEmpty(): boolean;
}