import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors = [
    {
      name: 'Susan Williams',
      img: '../../assets/img/person1.jpg',
      title: 'Lead Writer',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
    },
    {
      name: 'Grace Smith',
      img: '../../assets/img/person2.jpg',
      title: 'Co-Writer',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
    },
    {
      name: 'John Doe',
      img: '../../assets/img/person3.jpg',
      title: 'Editor',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
    },
    {
      name: 'Kevin Swanson',
      img: '../../assets/img/person4.jpg',
      title: 'Designer',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab libero voluptas officia.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
