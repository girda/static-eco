import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../shared/services/navigation.service';

@Component({
  selector: 'app-ecology-knowledge-base',
  templateUrl: './ecology-knowledge-base-page.component.html',
  styleUrls: ['./ecology-knowledge-base-page.component.scss']
})
export class EcologyKnowledgeBasePageComponent implements OnInit {
  navMenu;
  constructor(private navigation: NavigationService) { }

  ngOnInit() {
    const index = this.navigation.menu.findIndex(item => {
      if (item.route === 'ecology-knowledge-base') {
        return item;
      }
    });

    this.navMenu = this.navigation.menu[index].children;
  }

}
