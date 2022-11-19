import { Component, OnInit, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { Sucursal } from './sucursal.model';
import { ProductI } from '../../models/Productos/Products.interface';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../servicios/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  @Input() productHeader: ProductI;
  name =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  productsCart: Array<any>= [];
  productSelect: any;
  arrayId: Array<any>=[];
  itemsCart: ProductI[];

  count: any[] = [];
  countSelect: any;
  subtotal: number = 0;
//-------------------------------------------------
  option:boolean = false;
  selectedValue:string = 'val1';
  selectedPay:string = '1';
//-------------------------------------------------
  sucursal:Sucursal[] = [
    {name: 'cra 44 # 85 esquina', code:'1'},
    {name: 'cra 44 # 85 esquina', code:'2'},
    {name: 'cra 44 # 85 esquina', code:'3'},
    {name: 'cra 44 # 85 esquina', code:'4'},
  ]
  selectSucursal: string = '';
//CONSTRUCTOR ------------------
  constructor(private api: ApiService, private activeRoute: ActivatedRoute, private cartService: CartService) {
  }
  ngOnInit(): void {
    //loadItemsCart---------------------
    this.itemsCart = this.cartService.listCart();
    for (let element of this.itemsCart){
      this.productsCart.push({
        id: element.id,
        name: element.descripcion,
        count: 1,
        image: element.foto_carrito,
        price: 50,
        cateorgy: 'foot'
      })
    }
    //Contador
    this.count.push(
      { name: '1', code: '1' },
      { name: '2', code: '2' },
      { name: '3', code: '3' },
      { name: '4', code: '4' }
    );

    let suma = 0;
    this.productsCart.forEach(function (precio) {
      suma = suma + precio.price;
    });
    this.subtotal = suma;
  }

  cancel(product: any) {
    let temp = this.productsCart.find((el) => el.id == product.id);
    if (temp != null) {
      this.productsCart.pop();
      this.itemsCart.pop()
      let suma = 0;
      this.productsCart.forEach(function (precio) {
        suma = suma + precio.price;
    });
      this.subtotal = suma;
    }
  }
  //Data menu -----------------------------
  dataMenu(){
    this.option = !this.option;
  }

}
