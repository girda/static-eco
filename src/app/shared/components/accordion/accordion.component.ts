import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() isShow = false;
  @Input() icon: string;
  @Input() title: string;

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
      list: []
    },
    {
      title: 'Респонденти',
      list: []
    },
    {
      title: 'Регіони',
      list: []
    },
    {
      title: 'Територіальні громади',
      list: []
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
