import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {GridOptions, IDatasource} from 'ag-grid-community';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
@Injectable({
  providedIn: 'root'
})

export class AgGridService {

  gridOptions: GridOptions;
  localeText = {
    filterOoo: 'Фильтр...',
    applyFilter: 'Применить'
  };
  queryBody: any;
  isReadyTable = false;
  urlMyDataSource: string;

  myDataSource: IDatasource = {
    getRows: (params: any) => {
      this.rest.post(this.urlMyDataSource, this.queryBody)
        .subscribe((entity: any) => {
            const rowsThisPage = entity[0];
            params.successCallback(rowsThisPage, entity[0].length);
            // console.log(this.gridOptions.api.setFilterModel(null));
            // if (entity.description.length < 7 ) {
            //   this.gridOptions.api.sizeColumnsToFit();
            // }
          }
        );
    }
  };

  constructor(private rest: RestService) {
    this.gridOptions = {
      defaultColDef: {
        width: 200,
        floatingFilterComponentParams: {suppressFilterButton: true},
        filter: true,
        floatingFilter: true,
        filterParams: {
          // debounceMs: 1500,
          buttons: ['apply'],
        }
      },
      rowSelection: 'single',
      tooltipShowDelay: 500,
      rowModelType: 'infinite',
      datasource: this.myDataSource,
      localeText: this.localeText
    };
  }

  createColumnDefs(data: any[]) {
    const tooltipRenderer = (params) => {
      return `<span title="${params.value}">${params.value}</span>`;
    };
    const columnDefs = [];
    data[1].forEach(names => {
      columnDefs.push({
        headerName: names.info,
        field: names.code,
        headerTooltip: names.info,
        cellRenderer: tooltipRenderer
      });
    });
    return columnDefs;
  }

  getTable(url, queryBody) {

    this.isReadyTable = false;
    this.queryBody = queryBody;
    this.urlMyDataSource = url;

    this.rest.post(url, queryBody).subscribe(res => {
      console.log(res);
      this.gridOptions.columnDefs = this.createColumnDefs(res);
      this.isReadyTable = true;
    });
  }

}
