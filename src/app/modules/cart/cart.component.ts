import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  productsCart:any[] = [{
    id: 1,
    name: this.name,
    count: 2,
    image: './image-test.jpg',
    price: 50,
    cateorgy: 'foot',
    color: 'White',
    size: 'Large'
  },{
    id: 1,
    name: this.name,
    count: 2,
    image: './image-test.jpg',
    price: 50,
    cateorgy: 'foot',
    color: 'White',
    size: 'Large'
  },{
    id: 1,
    name: this.name,
    count: 2,
    image: './image-test.jpg',
    price: 50,
    cateorgy: 'foot',
    color: 'White',
    size: 'Large'
  },{
    id: 1,
    name: this.name,
    count: 2,
    image: './image-test.jpg',
    price: 50,
    cateorgy: 'foot',
    color: 'White',
    size: 'Large'
  },{
    id: 1,
    name: this.name,
    count: 2,
    image: './image-test.jpg',
    price: 50,
    cateorgy: 'foot',
    color: 'White',
    size: 'Large'
  }];
  productSelect:any;

  count:any[] = [];
  countSelect:any;
  subtotal:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.count.push({name: '1', code: '1'},{name: '2', code: '2'},{name: '3', code: '3'},{name: '4', code: '4'});
  }

  cancel(product:any){
    let temp = this.productsCart.find(el => el.id == product.id);

    console.log(product);

    if(temp != null){
      this.productsCart.pop();
    }
  }

}
