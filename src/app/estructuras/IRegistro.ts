export interface IRegistro {

    agregarUsuario(
        nombre: string,
        correo: string,
        password: string,
        telefono: string
    ): void;

    mostrarUsuarios(): void;

    isEmpty(): boolean;
}