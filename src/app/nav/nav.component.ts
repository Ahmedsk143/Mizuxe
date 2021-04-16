import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  show = false;
  lis = ['home', 'about', 'authors', 'contact'];
  constructor() {}

  ngOnInit(): void {}
  scroll(li: string) {
    document.getElementById(li).scrollIntoView({ behavior: 'smooth' });
  }
}
