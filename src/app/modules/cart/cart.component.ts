import { Component, OnInit, Input} from '@angular/core';
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
  bloquear: boolean = false;
  name =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  productsCart: {
    id: number;
    name: string;
    contador: number;
    image: string;
    price: number;
    priceX: number;
  }[] = [];
  productSelect: any;
  arrayId: Array<any> = [];
  itemsCart: ProductI[];

  count: any[] = [];
  countSelect: any;
  subtotal: number = 0;
  //-------------------------------------------------
  option: boolean = false;
  selectedValue: string = 'val1';
  selectedPay: string = '1';
  //-------------------------------------------------
  setVisible: boolean = false
  sucursal: Sucursal[] = [
    { name: 'cra 44 # 85 esquina', code: '1' },
    { name: 'cra 44 # 85 esquina', code: '2' },
    { name: 'cra 44 # 85 esquina', code: '3' },
    { name: 'cra 44 # 85 esquina', code: '4' },
  ];
  selectSucursal: string = '';
  //CONSTRUCTOR ------------------
  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getProductsCart()
    this.sumaSubtotal()
  }

  receiveMessage($event: any) {
    this.setVisible = $event
  }

  sumaSubtotal(){
    let suma = 0;
    this.productsCart.forEach(function (precio) {
      suma = suma + precio.priceX;
    });
    this.subtotal = suma;
  }

  //get products
  getProductsCart(){
    if (localStorage.getItem('cart')){
      const cart = localStorage.getItem('cart')
      this.itemsCart = JSON.parse(cart!)
      this.itemsCart.map(item=> {
        this.productsCart.push({
          id: item.id,
          name: item.descripcion,
          contador: 1,
          image: item.foto_carrito,
          price: 50,
          priceX: 50
        });
      })
    }
  }

  cancel(product: any) {
    let temp = this.productsCart.find((el) => el.id == product.id);
    if (temp != null) {
      this.productsCart.pop();
      this.itemsCart.pop();
      localStorage.setItem('cart', JSON.stringify(this.itemsCart))
      let suma = 0;
      this.productsCart.forEach(function (precio) {
        suma = suma + precio.priceX;
      });
      this.subtotal = suma;
      if (suma == 0) {
        this.bloquear = true;
      }
    }
  }
  //Data menu -----------------------------
  dataMenu() {
    this.option = !this.option;
  }

  addMore(item: any, id: any){
    if (localStorage.getItem('cart')){
      let suma = 0
      this.productsCart.map(el => {
        if(el.id === id){
          el.priceX = item
        }
        suma = suma + el.priceX
      })
      this.subtotal = suma
    }
  }


  //verificar codigo postal
  verify(){
    const form = new FormData()
    form.append('postal_code', '41010')
    this.api.VerifyCodPostal(form).subscribe({
      next:(res)=> {
        console.log(res)
      }, error:(err)=> {
        console.log(err)
      }
    })
  }
}
