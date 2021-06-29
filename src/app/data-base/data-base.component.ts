import { Component, OnInit } from '@angular/core';
import {RestService} from "../shared/services/rest.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.scss']
})
export class DataBaseComponent implements OnInit {

  regions$: Observable<any>;
  subjects$: Observable<any>;
  periods$: Observable<any>;

  constructor(private rest: RestService) { }

  ngOnInit() {

    this.regions$ =this.rest.get(`${environment.apiUrl}/regions`);
    this.subjects$ =this.rest.get(`${environment.apiUrl}/subjects`);
    this.periods$ =this.rest.get(`${environment.apiUrl}/periods`);
  }

}
