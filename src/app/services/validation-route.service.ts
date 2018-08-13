import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationRouteService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean{
    let status = false;
    let value = sessionStorage.getItem('token');
    if(value != null){
      status = true
    }else{
      this.router.navigate(['']);
    }
    return status;
  }
}
