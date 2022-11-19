import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/servicios/carousel/carousel.service';
import { Carousel } from 'src/app/models/carousel/carousel.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ProductI } from 'src/app/models/Productos/Products.interface';
import { Router } from '@angular/router';
import { CartService } from '../../servicios/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousel: Carousel[];
  photo: Array<any>= [];
  products: ProductI[];
  test: Array<any>;

  constructor(private carouselServices: CarouselService, private api: ApiService, private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    // this.carouselServices.getCarousel().then(Carousel =>{
    //   this.carousel = Carousel;
    //   console.log(this.carousel)
    // })
    this.api.getAllProducts().subscribe(data=> {
      this.products = data.data;
    })

  }

  addCart(product: ProductI){
    this.cartService.addToCart(product);
    this.router.navigate(['/cart'])
  }
}
