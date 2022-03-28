import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string ='';
  date : string ='';
  amount : number = 0;
  height : number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  OnChangeMiles(value:string){
    this.miles = parseFloat(value);
  }

  OnChangeName(value:string){
    this.name = value;
  }
  
  OnChangeDate(value:string){
    this.date = value;
  }
  
  OnChangeAmount(value:string){
    this.amount = parseFloat(value);
  }

  OnChangeHeight(value:string){
    this.height = parseFloat(value);
  }
}
