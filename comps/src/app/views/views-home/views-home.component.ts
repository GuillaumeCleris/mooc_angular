import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [ { value:22 , label:"Users"},
            { value:967, label:"Page Views"},
            { value: 500, label:"Favorites"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
