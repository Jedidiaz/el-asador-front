import { ProductI } from 'src/app/models/Productos/Products.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../servicios/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photo: Array<any> = [];
  test: Array<any>;

  carousel: ProductI[] = [];
  productPromotion: ProductI[] = [];

  responsiveOptions: any
  constructor(
    private api: ApiService,
    private router: Router,
    private cartService: CartService
  ) {

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  ngOnInit(): void {
    this.getProductsCarousel();
  }

  //Carousel
  getProductsCarousel() {
    this.api.getAllProducts()
      .subscribe({
        next: (res: { data: any[]; })=> {
          res.data.map(item => {
            if (item.es_carrusel === 1){
              this.carousel.push(item)
            }
            if (item.es_promocion === 1){
              this.productPromotion.push(item)
            }
          })
          console.log(this.carousel)
        }, error: (err: any)=> {
          console.log(err)
        }
      })
  }

  //promociones
  getProductsPromotion() {}

  addCart(product: ProductI) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

  addToCart(product: ProductI){
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify([product]))
      this.router.navigate(['/cart'])
    }else {
      const cart = localStorage.getItem('cart')
      let array = JSON.parse(cart!)
      array.push(product)
      localStorage.setItem('cart', JSON.stringify(array))
      this.router.navigate(['/cart'])
    }
  }
}
