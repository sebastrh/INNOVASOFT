import type { ICategorias } from "./ICategorias.js";

export class Categorias implements ICategorias {

    private categoriasArray: string[] = [];


    agregarCategoria(nombre: string): void {

        this.categoriasArray.push(nombre);

    }


    buscarCategoria(
        nombre: string
    ): string | undefined {

        return this.categoriasArray.find(
            categoria =>
                categoria === nombre
        );

    }


    mostrarCategorias(): void {

        console.dir(
            this.categoriasArray,
            {
                depth: null,
                colors: true
            }
        );

    }


    isEmpty(): boolean {

        return this.categoriasArray.length === 0;

    }

}