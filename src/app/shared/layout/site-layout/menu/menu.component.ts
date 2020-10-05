import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';
const navigation = new NavigationService();

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menu;
  constructor() {
  }

}

