import type { IInicio } from "./IInicio.js";

export class Inicio implements IInicio {

    private destacadosArray: string[] = [];


    agregarDestacado(producto: string): void {

        this.destacadosArray.push(producto);

    }


    mostrarDestacados(): void {

        console.log("Productos destacados:");

        this.destacadosArray.forEach(
            producto => console.log(producto)
        );

    }


    isEmpty(): boolean {

        return this.destacadosArray.length === 0;

    }

}