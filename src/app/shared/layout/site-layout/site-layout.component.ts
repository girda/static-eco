import {Component} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {

  constructor(private navigationService: NavigationService) {}
}
