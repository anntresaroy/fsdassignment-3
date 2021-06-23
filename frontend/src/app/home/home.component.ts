import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title='LIBRARY APP';
  constructor(private router:Router, public _auth:AuthService) { }
 
  ngOnInit(): void {
  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

}
