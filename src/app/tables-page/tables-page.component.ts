import {Component, OnInit} from '@angular/core';
import {RestService} from '../shared/services/rest.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {TableService} from '../shared/services/table.service';
import {log} from 'util';

@Component({
  selector: 'app-emissions-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent implements OnInit {
  title = '';

  listYears$: Observable<any[]>;
  currentRoute = location.pathname;
  constructor(public emissionsService: TableService,
              private rest: RestService) {
  }

  ngOnInit() {
    this.listYears$ = this.rest.get(`${environment.apiUrl}${this.currentRoute}`);

    switch (this.currentRoute) {
      case '/national-emissions':
        this.title = 'Викиди';
        break;
      case '/national-waste':
        this.title = 'Відходи';
        break;
    }
  }

  getSubstances(btn) {
    this.emissionsService.currentYear = btn;

    console.log(this.emissionsService.currentYear);
  }


}
