import type { IMetodosPago } from "./IMetodosPago.js";

export class MetodosPago implements IMetodosPago {

    private metodosArray: {
        tipo: string;
        titular: string;
        terminacion: string;
    }[] = [];


    agregarMetodo(
        tipo: string,
        titular: string,
        terminacion: string
    ): void {

        this.metodosArray.push({

            tipo: tipo,
            titular: titular,
            terminacion: terminacion

        });

    }


    eliminarMetodo(
        terminacion: string
    ): void {

        const posicion =
            this.metodosArray.findIndex(
                metodo =>
                    metodo.terminacion === terminacion
            );


        if (posicion !== -1) {

            this.metodosArray.splice(
                posicion,
                1
            );

        }

    }


    mostrarMetodos(): void {

        console.dir(
            this.metodosArray,
            {
                depth: null,
                colors: true
            }
        );

    }


    isEmpty(): boolean {

        return this.metodosArray.length === 0;

    }

}