import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  navMenu = [
    {title: 'Органи державної влади з питань екології', description: 'Описание ..... ..... ..... .....', imgUrl: 'ua.png'},
    {title: 'Міжнародні екологічні організації', description: 'Описание ..... ..... ..... .....', imgUrl: 'eco-world.png'},
    {title: 'Національні екологічні організаці', description: 'Описание ..... ..... ..... .....', imgUrl: 'eco-ua.png'},
    {title: 'Міжнародні статистичні організації', description: 'Описание ..... ..... ..... .....', imgUrl: 'stat-world.png'},
    {title: 'Національні статистичні організації', description: 'Описание ..... ..... ..... .....', imgUrl: 'stat-ua.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
