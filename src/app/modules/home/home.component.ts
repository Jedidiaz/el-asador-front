import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  responsiveOptions: Array<any> = [];
  images: any = [];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.images = [
      'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg',
      'https://images.pexels.com/photos/139309/pexels-photo-139309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/139309/pexels-photo-139309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];
  }
}
