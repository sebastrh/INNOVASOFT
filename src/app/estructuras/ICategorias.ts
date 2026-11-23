export interface ICategorias {

    agregarCategoria(
        nombre: string
    ): void;

    buscarCategoria(
        nombre: string
    ): string | undefined;

    mostrarCategorias(): void;

    isEmpty(): boolean;
}