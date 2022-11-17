import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/servicios/carousel/carousel.service'
import { Carousel } from 'src/app/models/carousel/carousel.interface'
import { ApiService } from 'src/app/servicios/api/api.service'
import { ProductI } from 'src/app/models/Productos/Products.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousel: Carousel[];
  photo: Array<any>= [];
  products: ProductI[];

  constructor(private carouselServices: CarouselService, private api: ApiService) {}
  ngOnInit(): void {
    this.carouselServices.getCarousel().then(Carousel =>{
      this.carousel = Carousel;
    })
    this.api.getAllProducts().subscribe(data=> {
      this.products = data.data;
      for (let element of this.products){
        this.photo.push(element.foto_carrusel);
      }
      this.carousel = this.photo;
    })

  }
}
