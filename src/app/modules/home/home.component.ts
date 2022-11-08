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

  constructor(private carouselServices: CarouselService) {}
  ngOnInit(): void {
    this.carouselServices.getCarousel().then(Carousel =>{
      this.carousel = Carousel;
    })
  }
}
