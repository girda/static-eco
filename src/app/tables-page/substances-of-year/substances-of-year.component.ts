import {Component, OnDestroy, OnInit} from '@angular/core';
import {TableService} from '../../shared/services/table.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {RestService} from '../../shared/services/rest.service';
import {environment} from '../../../environments/environment';
import {AgGridService} from '../../shared/services/ag-grid.service';

@Component({
  selector: 'app-substances-of-year',
  templateUrl: './substances-of-year.component.html',
  styleUrls: ['./substances-of-year.component.scss']
})
export class SubstancesOfYearComponent implements OnInit, OnDestroy {
  title = '';

  currentYear;
  currentTable;
  agGridIsReady = false;

  substancesList$: Observable<any[]>;

  isLoaded = false;

  currentRoute = location.pathname.substr(0, location.pathname.length - 5); // 5 - pathname: /year

  start = 0;
  limit = 100;

  constructor(private emissionsService: TableService,
              private router: Router,
              private rest: RestService,
              private gridService: AgGridService) { }

  ngOnInit() {
    this.currentYear = this.emissionsService.currentYear;
    if (!this.currentYear) {
      this.router.navigate([this.currentRoute]);
    } else {
      this.substancesList$ = this.rest.get(`${environment.apiUrl}${this.currentRoute}/${this.currentYear}`);
    }

    switch (this.currentRoute) {
      case '/national-emissions':
        this.title = 'Викиди';
        break;
      case '/national-waste':
        this.title = 'Відходи';
        break;
    }
  }

  // loadMore() {
  //   this.isLoaded = false;
  //   console.log();
  //   const optionsForTable = {
  //     table: this.currentTable,
  //     start: this.start,
  //     limit: this.limit,
  //     url: `${environment.apiUrl}${this.currentRoute}`
  //   };
  //
  //   this.gridService.loadMore(optionsForTable)
  //     .then(res => {
  //       this.start += this.step;
  //       this.isLoaded = true;
  //     });
  // }

  getTable(tableName) {
    this.agGridIsReady = true;

    if (this.currentTable !== tableName) {
      this.start = 0;
    }
    this.isLoaded = false;
    this.currentTable = tableName;

    const optionsForTable = {
      table: tableName,
      start: this.start,
      limit: this.limit,
      url: `${environment.apiUrl}${this.currentRoute}`
    };

    this.gridService.getTable(optionsForTable);
  }

  ngOnDestroy(): void {
    this.gridService.isReadyTable = false;
  }

}
