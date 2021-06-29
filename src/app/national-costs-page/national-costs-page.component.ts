import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgGridService} from '../shared/services/ag-grid.service';
import {RestService} from '../shared/services/rest.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-national-costs-page',
  templateUrl: './national-costs-page.component.html',
  styleUrls: ['./national-costs-page.component.scss']
})
export class NationalCostsPageComponent implements OnInit, OnDestroy {

  isLoaded = false;
  agGridIsReady = false;
  listYears$: Observable<any>;

  currentTable;

  start = 0;
  limit = 100;

  constructor(public gridService: AgGridService,
              private rest: RestService) {
  }

  ngOnInit() {
    this.listYears$ = this.rest.get(`${environment.apiUrl}/national-costs`);
  }

  // loadMore() {
  //   this.isLoaded = false;
  //   const optionsForTable = {
  //     table: this.currentTable,
  //     start: this.start,
  //     limit: this.limit,
  //     url: `${environment.apiUrl}/national-costs`
  //   };
  //
  //   this.gridService.loadMore(optionsForTable)
  //     .then(res => {
  //       this.start += this.step;
  //       this.isLoaded = true;
  //     });
  //
  //
  //
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
      url: `${environment.apiUrl}/national-costs`
    };

    // this.gridService.getTable(optionsForTable);
  }
  ngOnDestroy(): void {
    this.gridService.isReadyTable = false;
  }


}
