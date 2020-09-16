import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';

const createMenu = (menu) => {
  const createHtml = (data) => `
      <ul >${data.map((item, i) => `
        <li data-index="${i}">
          <a routerLink="/${item.route}">${item.title}</a>
          ${item.children ? createHtml(item.children) : ''}
        </li>`).join('')}
      </ul>`;

  return createHtml(menu);
};

const navigation = new NavigationService();

@Component({
  selector: 'app-menu',
  template: `<nav class="main-nav">${createMenu(navigation.menu)}</nav>`,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  // @ViewChildren('ul') ul: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // console.log(this.ul.last.nativeElement.lastChild);
  }
}
