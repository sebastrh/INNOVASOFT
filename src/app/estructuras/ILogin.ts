export interface ILogin {

    iniciarSesion(
        correo: string,
        password: string
    ): string | undefined;

    cerrarSesion(): string;

    isEmpty(): boolean;
}