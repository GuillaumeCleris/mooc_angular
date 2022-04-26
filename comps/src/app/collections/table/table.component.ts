import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames='';
  @Input() data: { [key: string]:any}[] = [];
  @Input() headers: { key: string; label: string }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
