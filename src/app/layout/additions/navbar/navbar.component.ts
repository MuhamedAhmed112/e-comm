import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthentictionService } from '../../../shared/servcies/auth/authentiction.service';
import { signinService } from '../../../shared/servcies/auth/signin.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
   
   constructor(public _signinService:signinService ){}
 
}