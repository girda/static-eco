import {Component} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {

  navMenu = this.navigation.menu;

  constructor(private navigation: NavigationService) {
  }

}
