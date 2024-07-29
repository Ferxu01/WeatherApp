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
        title: 'Link 1',
        url: 'https://www.google.es'
      },
      {
        title: 'Link 2',
        url: 'https://www.youtube.com'
      },
      {
        title: 'Link 3',
        url: 'https://maps.google.com'
      }
    ];
  }
}
