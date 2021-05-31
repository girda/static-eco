import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.scss']
})
export class DataBaseComponent implements OnInit {

  regions = [
    {name: 'Обрати всі', id: 1},
    {name: 'Автономна Республіка Крим', id: 2},
    {name: 'Вінницька', id: 3},
    {name: 'Волинська', id: 4},
    {name: 'Дніпропетровська', id: 5},
    {name: 'Донецька', id: 6},
    {name: 'Житомирська', id: 7},
    {name: 'Закарпатська', id: 8},
    {name: 'Запорізька', id: 9},
    {name: 'Івано-Франківська', id: 10},
    {name: 'Київська', id: 11},
    {name: 'Кіровоградська', id: 12},
    {name: 'Луганська', id: 13},
    {name: 'Львівська', id: 14},
    {name: 'Миколіївська', id: 15},
    {name: 'Рівненська', id: 16},
    {name: 'Сумська', id: 17},
    {name: 'Тернопільська', id: 18},
    {name: 'Харківська', id: 19},
    {name: 'Херсонська', id: 20},
    {name: 'Хмельницька', id: 21},
    {name: 'Черкаська', id: 22},
    {name: 'Чернівецька', id: 23},
    {name: 'Чернігівська', id: 24},
    {name: 'м. Київ', id: 25},
    {name: 'м. Севастополь', id: 26},
  ]

  constructor() { }

  ngOnInit() {
  }

}
