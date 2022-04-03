import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 
      'https://thewacomoms.com/wp-content/uploads/2019/06/waco-moms-summer-beach-tips.png'

    },

    {
      title: 'At the Mountain',
      url: 
      'https://cdn.hswstatic.com/gif/colder-top-mountain-everest.jpg'
    },

    {
      title: 'At the City',
      url: 
      'https://i.guim.co.uk/img/media/1e0c3f8bbf09178377309c1f25ea326eaeb5aa0c/0_280_4200_2520/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7ec79d5aa06c45c611b8bd6b3d2affea'
    },

    {
      title: 'At the Country Side',
      url: 
      'https://static.educalingo.com/img/en/800/rural-area.jpg'
    },

    {
      title: 'At the Beach',
      url: 
      'https://thewacomoms.com/wp-content/uploads/2019/06/waco-moms-summer-beach-tips.png'

    },

    {
      title: 'At the Mountain',
      url: 
      'https://cdn.hswstatic.com/gif/colder-top-mountain-everest.jpg'
    },

    {
      title: 'At the City',
      url: 
      'https://i.guim.co.uk/img/media/1e0c3f8bbf09178377309c1f25ea326eaeb5aa0c/0_280_4200_2520/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7ec79d5aa06c45c611b8bd6b3d2affea'
    },

    {
      title: 'At the Country Side',
      url: 
      'https://static.educalingo.com/img/en/800/rural-area.jpg'
    },

    {
      title: 'At the Beach',
      url: 
      'https://thewacomoms.com/wp-content/uploads/2019/06/waco-moms-summer-beach-tips.png'

    },

    {
      title: 'At the Mountain',
      url: 
      'https://cdn.hswstatic.com/gif/colder-top-mountain-everest.jpg'
    },

    {
      title: 'At the City',
      url: 
      'https://i.guim.co.uk/img/media/1e0c3f8bbf09178377309c1f25ea326eaeb5aa0c/0_280_4200_2520/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7ec79d5aa06c45c611b8bd6b3d2affea'
    },

    {
      title: 'At the Country Side',
      url: 
      'https://static.educalingo.com/img/en/800/rural-area.jpg'
    },

    {
      title: 'At the Beach',
      url: 
      'https://thewacomoms.com/wp-content/uploads/2019/06/waco-moms-summer-beach-tips.png'

    },

    {
      title: 'At the Mountain',
      url: 
      'https://cdn.hswstatic.com/gif/colder-top-mountain-everest.jpg'
    },

    {
      title: 'At the City',
      url: 
      'https://i.guim.co.uk/img/media/1e0c3f8bbf09178377309c1f25ea326eaeb5aa0c/0_280_4200_2520/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7ec79d5aa06c45c611b8bd6b3d2affea'
    },

    {
      title: 'At the Country Side',
      url: 
      'https://static.educalingo.com/img/en/800/rural-area.jpg'
    },{
      title: 'At the Beach',
      url: 
      'https://thewacomoms.com/wp-content/uploads/2019/06/waco-moms-summer-beach-tips.png'

    },

    {
      title: 'At the Mountain',
      url: 
      'https://cdn.hswstatic.com/gif/colder-top-mountain-everest.jpg'
    },

    {
      title: 'At the City',
      url: 
      'https://i.guim.co.uk/img/media/1e0c3f8bbf09178377309c1f25ea326eaeb5aa0c/0_280_4200_2520/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7ec79d5aa06c45c611b8bd6b3d2affea'
    },

    {
      title: 'At the Country Side',
      url: 
      'https://static.educalingo.com/img/en/800/rural-area.jpg'
    }
  ];

  checkWindowIndex(index:number){
    return Math.abs(this.currentPage-index) < 5;
  }

}
