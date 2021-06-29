import {Component, OnInit, ViewChildren} from '@angular/core';
import {RestService} from "../shared/services/rest.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AgGridService} from '../shared/services/ag-grid.service';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.scss']
})
export class DataBaseComponent implements OnInit {

  regions$: Observable<any>;
  subjects$: Observable<any>;
  periods$: Observable<any>;

  form: FormGroup;

  isLoaded = false;
  agGridIsReady = false;

  constructor(private rest: RestService,
              public gridService: AgGridService) { }

  ngOnInit() {
    this.form = new FormGroup({
      regions: new FormArray([]),
      periods: new FormArray([]),
      classifier: new FormControl(null)
    });

    this.regions$ = this.rest.get(`${environment.apiUrl}/regions`);
    this.subjects$ = this.rest.get(`${environment.apiUrl}/subjects`);
    this.periods$ = this.rest.get(`${environment.apiUrl}/periods`);
  }

  onCheckChange(event, type: string) {
    const formArray: FormArray = this.form.get(type) as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit(e): void {
    this.agGridIsReady = true;
    this.isLoaded = false;
    this.gridService.getTable(`${environment.apiUrl}/get-table`, this.form.value);
  }
}
