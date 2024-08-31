import { CanActivateFn, Router } from '@angular/router';
import { AuthentictionService } from '../servcies/auth/authentiction.service';
import { inject } from '@angular/core';

export const authGuard:CanActivateFn = (route, state) => {
  let _AuthentictionService:AuthentictionService =inject(AuthentictionService);
  let _Router:Router =inject(Router);
  if (_AuthentictionService.userData.getValue()!=null) {
  return true;
  }
   else {
    _Router.navigate(['/login']);  // redirect to login page if user is not authenticated
  return false;
}
  
}
