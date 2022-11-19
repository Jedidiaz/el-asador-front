import { Injectable } from '@angular/core';
import { ProductI } from '../../models/Productos/Products.interface';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  Product: ProductI;
  Items: ProductI[] = [];
  constructor() { }

  addToCart(product:any){
    console.log(this.Items)
    this.Items.push(product);
  }

  cleanCart(){
    this.Items = [];
    return this.Items;
  }

  listCart(){
    return this.Items;
  }
}
