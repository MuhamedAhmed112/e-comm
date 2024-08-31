import { AuthentictionService } from './../../../shared/servcies/auth/authentiction.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(public _AuthentictionService: AuthentictionService) {}
  islogin: boolean = false;

  ngOnInit(): void {
    this._AuthentictionService.userData.subscribe(() => {
      if (this._AuthentictionService.userData.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
  }
}
