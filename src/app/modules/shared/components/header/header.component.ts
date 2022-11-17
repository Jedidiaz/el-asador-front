import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import {  ApiService } from '../../../../servicios/api/api.service';
import { ProductI } from '../../../../models/Productos/Products.interface'


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
  products: ProductI[];
  countries!: any[];
  selectedCountry!:string;

  constructor(public api: ApiService) {

   }

  ngOnInit(): void {
    this.items = [
      {label: 'Productos', icon: 'pi pi-fw pi-home', routerLink: ['']},
      {label: 'Nuestras Tiendas', icon: 'pi pi-fw pi-calendar'},
      {label: 'Nosotros', icon: 'pi pi-fw pi-pencil'},
      {label: 'Carrito', icon: 'pi pi-shopping-cart', routerLink: ['/cart']}
    ];

    //Obtener productos
    this.api.getAllProducts().subscribe(data=> {
      this.products = data.data;
    })
    // this.subMenu = [
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'},
    //   {product: this.nameProduct, image: '../../../../../assets/submenu_icon.png'}
    // ]

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

  search(event:any) {
    /* this.mylookupservice.getResults(event.query).then(data => {
        this.results = data;
    }); */
  }

}
