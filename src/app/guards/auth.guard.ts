import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../adminServices/admin.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AdminService)
  const router = inject(Router)

  if(authService.isLoggedin()){
    return true;
  }else{
    alert("Operation denied... Please Login!!")
    router.navigateByUrl("")
    return false
  }
  
};
