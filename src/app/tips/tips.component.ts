import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
})
export class TipsComponent implements OnInit {
  tips = ['Better', 'Smarter', 'Faster', 'Stronger'];
  constructor() {}

  ngOnInit(): void {}
  cardGetClass(tip) {
    if (tip == 'Better' || tip == 'Faster') {
      return '';
    } else {
      return 'bg-primary text-white';
    }
  }
  h3GetClass(tip: string) {
    if (tip == 'Better' || tip == 'Faster') {
      return 'text-primary';
    } else {
      return 'bg-primary text-white';
    }
  }
  pGetClass(tip) {
    if (tip == 'Better' || tip == 'Faster') {
      return 'text-muted';
    } else {
      return 'text-white';
    }
  }
}
