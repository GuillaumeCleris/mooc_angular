import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: 'Near tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'What a beautiful tree'
    },
    { 
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'What a beautiful Snowy Mountain'
    },
    { 
      title: 'Montain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1',
      content: 'Do some biking'
    }
  ];
}
