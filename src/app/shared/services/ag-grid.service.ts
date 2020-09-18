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
  currentTable: string;
  isReadyTable = false;
  urlMyDataSource: string;

  myDataSource: IDatasource = {
    getRows: (params: any) => {
      this.rest.post(this.urlMyDataSource, {table: this.currentTable, params})
        .subscribe((entity: any) => {
            const rowsThisPage = entity.rows;

            params.successCallback(rowsThisPage, entity.totalRows);
            // console.log(this.gridOptions.api.setFilterModel(null));
            if (entity.description.length < 7 ) {
              this.gridOptions.api.sizeColumnsToFit();
            }
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
    data.forEach(names => {
      columnDefs.push({
        headerName: names.description,
        field: names.origin,
        headerTooltip: names.description,
        // cellRenderer: tooltipRenderer
      });
    });
    return columnDefs;
  }

  getTable({table, start, limit, url}) {

    this.isReadyTable = false;
    this.currentTable = table;
    this.urlMyDataSource = url;

    this.rest.post(url, {
      table,
      start,
      limit
    }).subscribe(res => {
      this.gridOptions.columnDefs = this.createColumnDefs(res.description);
      this.isReadyTable = true;
    });
  }

}
