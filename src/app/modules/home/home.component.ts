import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/servicios/carousel/carousel.service'
import { Carousel } from 'src/app/models/carousel/carousel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousel!:Carousel[];
  promotionCards:Array<any> = [];

  constructor(private carouselServices: CarouselService) {}
  ngOnInit(): void {
    this.carouselServices.getCarousel().then(Carousel =>{
      this.carousel = Carousel;
    })
    this.promotionCards = [
      {title: '¡Sebastián Yatra llegó para compartir su Menú McDonalds!', content: '¿Qué esperas para probarlo?', image: '../../../assets/Image-carousel/carousel-06.jpg'},
      {title: '¡Sebastián Yatra llegó para compartir su Menú McDonalds!', content: '¿Qué esperas para probarlo?', image: '../../../assets/Image-carousel/carousel-05.jpg'},
      {title: '¡Sebastián Yatra llegó para compartir su Menú McDonalds!', content: '¿Qué esperas para probarlo?', image: '../../../assets/Image-carousel/carousel-04.jpg'}
    ]
  }
}
