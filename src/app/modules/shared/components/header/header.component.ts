import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import {  ApiService } from '../../../../servicios/api/api.service';
import { ProductI } from '../../../../models/Productos/Products.interface'
import { CartService } from 'src/app/servicios/cart/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  items:MenuItem[] = [];
  activeItem!:MenuItem;
  info:Array<any> = [];
  nameProduct: string = 'Product';
  checked: boolean = false;

  /* text: string;
  results: string[]; */
  products: ProductI[] = [];
  nuestra: ProductI[]= []
  comidas: ProductI[]= []
  platos: ProductI[]= []
  reposteria: ProductI[]= []
  bebidas: ProductI[]= []

  countries!: any[];
  selectedCountry!:string;

  sideBar:any

  constructor(public api: ApiService, private cartService: CartService, private router: Router) {

   }

  ngOnInit(): void {
    //Obtener productos
    this.getProducts()
    this.countries = [
      {name: 'España', code: 'ES'},
    ];
    this.activeItem = this.items[0];
    this.selectedCountry = this.countries[0];
    this.info = ['Trabaja con nosotros','Contacto']
    console.log()

    if(localStorage.getItem("token")){
      this.checked = true;
    }
  }

  getProducts(){
    this.api.getAllProducts().subscribe({
      next: (res)=> {
        console.log(res)
        res.data.map(item => {
          if (item.es_compuesto === 0){
            this.products.push(item)
            if(item.familia === 'nuestra_seleccion') this.nuestra.push(item)
            else if(item.familia === 'comidas_caseras') this.comidas.push(item)
            else if(item.familia === 'platos_frios') this.platos.push(item)
            else if(item.familia === 'reposteria') this.reposteria.push(item)
            else if(item.familia === 'bebidas') this.bebidas.push(item)
          }
        })
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  search(event:any) {
    /* this.mylookupservice.getResults(event.query).then(data => {
        this.results = data;
    }); */
  }

  addCart(product: ProductI){
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify([product]))
      window.location.href="/cart"
    }else {
      const cart = localStorage.getItem('cart')
      let array = JSON.parse(cart!)
      array.push(product)
      localStorage.setItem('cart', JSON.stringify(array))
      window.location.href="/cart"
    }
  }



}
