import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-data-base',
  templateUrl: './menu-data-base.component.html',
  styleUrls: ['./menu-data-base.component.scss']
})
export class MenuDataBaseComponent implements OnInit {

  menu = [
    {
      title: 'Україна',
      list: [
        {name: 'Таблиці', icon: 'table.svg'},
        {name: 'Графіки', icon: 'grafic.png'},
        {name: 'Інфографіка', icon: 'info2.png'},
        {name: 'Карти', icon: 'map.png'}
        ]
    },
    {
      title: 'Райони',
      list: [
        {name: 'Таблиці', icon: 'table.svg'},
        {name: 'Графіки', icon: 'grafic.png'},
        {name: 'Інфографіка', icon: 'info2.png'},
        {name: 'Карти', icon: 'map.png'}
      ]
    },
    {
      title: 'Респонденти',
      list: [
        {name: 'Таблиці', icon: 'table.svg'},
        {name: 'Графіки', icon: 'grafic.png'},
        {name: 'Інфографіка', icon: 'info2.png'},
        {name: 'Карти', icon: 'map.png'}
      ]
    },
    {
      title: 'Регіони',
      list: [
        {name: 'Таблиці', icon: 'table.svg'},
        {name: 'Графіки', icon: 'grafic.png'},
        {name: 'Інфографіка', icon: 'info2.png'},
        {name: 'Карти', icon: 'map.png'}
      ]
    },
    {
      title: 'Територіальні громади',
      list: [
        {name: 'Таблиці', icon: 'table.svg'},
        {name: 'Графіки', icon: 'grafic.png'},
        {name: 'Інфографіка', icon: 'info2.png'},
        {name: 'Карти', icon: 'map.png'}
      ]
    }
    ]

  constructor() { }

  ngOnInit() {
  }

}
