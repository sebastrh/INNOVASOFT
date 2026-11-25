
import { Service } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';







@Service()
export class Auth {
//     usuarios =[
//   { username: 'ADIDAS', password: '123456' },
//   { username: 'NIKE', password: '654321' },
//   { username: 'BRANDING', password: 'abcdef' }
// ]

    
     private readonly url= 'https://fakestoreapi.com/auth/login';

    

    //Login sin conexion a API, para hacer un login de prueba
    //  iniciarSesion(usuario: string, password: string): boolean {
    //    const usuarioEncontrado= this.usuarios.find(
    //         u=> u.username ===usuario && u.password ===password
    //     );
    //     if(usuarioEncontrado) {
    //         //guardar el usuario en cache
    //         localStorage.setItem('Credenciales', JSON.stringify({ usuario:usuarioEncontrado.username, isLoggedIn:true }));
    //         return true;
    //     }
    //     return false;
        
    // }

    // cerrarSesion(): void {
    //     localStorage.removeItem('Credenciales');
    // }


    //Login con conexion a FakeStore
    async iniciarSesion(
        usuario: string,
        password: string
    ): Promise<boolean>{
        try{
        const respuesta= await CapacitorHttp.post({
            url:this.url,
            headers: {
                'Content-Type': 'application/json'
            },
            data:{
                username: usuario,
                password: password
            }

            
        });

          if (
        respuesta.status >= 200 &&
        respuesta.status < 300 &&
        typeof respuesta.data?.token === 'string' &&
        respuesta.data.token.length > 0
      ) {

       // Obtener el token de FakeStore
      const token = respuesta.data.token;

    // Guardar el token con Capacitor Preferences
    await Preferences.set({
      key: 'token',
      value: token
    });

  return true;
       
      }
      console.log('Estado HTTP:', respuesta.status);
      console.log('Respuesta de FakeStore:', respuesta.data);
      return false;
      



    } catch(error) {
        console.error('Error al iniciar sesión:', error);

      return false;
      
    }

    

}

async cerrarSesion(): Promise<void> {
 await Preferences.remove({
  key: 'token'
 })
}

}
