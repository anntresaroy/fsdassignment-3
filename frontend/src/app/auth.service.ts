import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userSignUp(user:any){
    return this.http.post('Http://localhost:3001/signup',user);
  }

  userVerify(user:any){
    console.log(user);
    return this.http.post<any>('http://localhost:3001/login',user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}