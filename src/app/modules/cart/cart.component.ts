import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsCart:any[] = [];
  productSelect:any;

  count:any[] = [];
  countSelect:any;


  subtotal:number = 0;
  shipping:number = 0;
  tax:number = 0;
  total:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.productsCart.push({
      id: 1,
      name: 'Shirt',
      count: 2,
      image: './image-test.jpg',
      price: 50,
      cateorgy: 'foot',
      color: 'White',
      size: 'Large'
    },{
      id: 1,
      name: 'Shirt',
      count: 2,
      image: './image-test.jpg',
      price: 50,
      cateorgy: 'foot',
      color: 'White',
      size: 'Large'
    },{
      id: 1,
      name: 'Shirt',
      count: 2,
      image: './image-test.jpg',
      price: 50,
      cateorgy: 'foot',
      color: 'White',
      size: 'Large'
    },{
      id: 1,
      name: 'Shirt',
      count: 2,
      image: './image-test.jpg',
      price: 50,
      cateorgy: 'foot',
      color: 'White',
      size: 'Large'
    },{
      id: 1,
      name: 'Shirt',
      count: 2,
      image: './image-test.jpg',
      price: 50,
      cateorgy: 'foot',
      color: 'White',
      size: 'Large'
    });

    this.count.push({name: '1', code: '1'},{name: '2', code: '2'},{name: '3', code: '3'},{name: '4', code: '4'});
  }

  cancel(product:any){
    let temp = this.productsCart.find(el => el.id == product.id);

    console.log(product)

    if(temp != null){
      this.productsCart.pop();
    }
  }

}
