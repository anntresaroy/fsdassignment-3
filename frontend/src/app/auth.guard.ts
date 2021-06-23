import { Injectable } from '@angular/core';
import {  CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthorService } from './author.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthorService,private _router:Router){}
  canActivate():boolean{
   if(this._auth.loggedIn())
   {
       return true
   }
   else{
      this._router.navigate(['/login'])
      return false
   }
  }
    
  }

  
