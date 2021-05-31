import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-item-icon',
  templateUrl: './list-item-icon.component.html',
  styleUrls: ['./list-item-icon.component.scss']
})
export class ListItemIconComponent implements OnInit {

  @Input() list: any[] = null;
  @Input() title: string = null;

  constructor() { }

  ngOnInit() {
  }

}
