export interface IFiltros {

    agregarProducto(
        nombre: string,
        categoria: string,
        precio: number
    ): void;

    filtrarCategoria(
        categoria: string
    ): void;

    filtrarPrecio(
        precioMaximo: number
    ): void;

    isEmpty(): boolean;
}