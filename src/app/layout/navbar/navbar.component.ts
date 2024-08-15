import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: {
    title: string,
    url: string
  }[] = [];

  ngOnInit(): void {
    this.links = [
      {
        title: 'Inicio',
        url: 'home'
      },
      {
        title: 'Ver Provincias',
        url: 'weather/provinces'
      },
      {
        title: 'Link 3',
        url: 'https://maps.google.com'
      }
    ];
  }
}
