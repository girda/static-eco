import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../shared/services/navigation.service';

@Component({
  selector: 'app-glossary-page',
  templateUrl: './glossary-page.component.html',
  styleUrls: ['./glossary-page.component.scss']
})
export class GlossaryPageComponent implements OnInit {

  navMenu;

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
    const index = this.navigation.menu.findIndex(item => {
      if (item.route === 'glossary') {
        return item;
      }
    });

    this.navMenu = this.navigation.menu[index].children;
  }

}
