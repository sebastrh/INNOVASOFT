import type { IFiltros } from "./IFiltros.js";

export class Filtros implements IFiltros {

    private productosArray: {
        nombre: string;
        categoria: string;
        precio: number;
    }[] = [];


    agregarProducto(
        nombre: string,
        categoria: string,
        precio: number
    ): void {

        this.productosArray.push({

            nombre: nombre,
            categoria: categoria,
            precio: precio

        });

    }


    filtrarCategoria(
        categoria: string
    ): void {

        const resultado =
            this.productosArray.filter(
                producto =>
                    producto.categoria === categoria
            );


        console.dir(
            resultado,
            {
                depth: null,
                colors: true
            }
        );

    }


    filtrarPrecio(
        precioMaximo: number
    ): void {

        const resultado =
            this.productosArray.filter(
                producto =>
                    producto.precio <= precioMaximo
            );


        console.dir(
            resultado,
            {
                depth: null,
                colors: true
            }
        );

    }


    isEmpty(): boolean {

        return this.productosArray.length === 0;

    }

}