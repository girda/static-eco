import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {GridOptions} from 'ag-grid-community';


@Injectable({
  providedIn: 'root'
})

export class AgGridService {

  gridOptions: GridOptions;

  currentTable: string;
  rowData: any[];
  isReadyTable = false;

  constructor(private rest: RestService) {
    this.gridOptions = {
      defaultColDef: {
        width: 200,
        sortable: true,
        floatingFilterComponentParams: {suppressFilterButton: true},
        filter: true,
        floatingFilter: true
      },
      // context: {componentParent: this},
      rowSelection: 'single',
      tooltipShowDelay: 500,
      // rowModelType: 'serverSide'
    };
  }
  init(data: any[]) {
    this.gridOptions.onGridReady = () => {
      this.gridOptions.api.setRowData(data);
      // this.gridOptions.api.sizeColumnsToFit();
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
        cellRenderer: tooltipRenderer
      });
    });
    return columnDefs;
  }

  getTable({table, start, limit, url}) {

    this.isReadyTable = false;
    return new Promise(resolve => {
      this.currentTable = table;

      this.rest.post(url, {
        table,
        start,
        limit
      }).subscribe(res => {
        this.gridOptions.columnDefs = this.createColumnDefs(res.description);
        this.rowData = res.data;

        this.isReadyTable = true;
        this.init(this.rowData);
        console.log(this.rowData);
        resolve(true);
      });
    });
  }

  loadMore({table, start, limit, url}) {
    return new Promise(resolve => {
      this.rest.post(url, {
        table,
        start,
        limit
      }).subscribe(res => {
        this.rowData = this.rowData.concat(res.data);

        this.gridOptions.api.setRowData(this.rowData);
        console.log(this.rowData);
        resolve(true);
      });
    });
  }

  destroy() {

  }
}
