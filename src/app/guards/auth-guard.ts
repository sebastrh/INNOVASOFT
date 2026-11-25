import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { Preferences } from '@capacitor/preferences';





export const authGuard: CanActivateFn = async  () => {

const router= inject(Router)

const resultado= await Preferences.get({
  key: 'token'
});
if(resultado.value){
  return true;
}

return router.createUrlTree(['/login']);

};
