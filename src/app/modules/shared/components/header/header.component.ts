import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items:MenuItem[] = [];
  activeItem!:MenuItem;
  info:Array<any> = [];

  /* text: string;
  results: string[]; */

  countries!: any[];
  selectedCountry!:string;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Productos', icon: 'pi pi-fw pi-home', routerLink: ['']},
      {label: 'Nuestras Tiendas', icon: 'pi pi-fw pi-calendar'},
      {label: 'Nosotros', icon: 'pi pi-fw pi-pencil'},
      {label: 'Carrito', icon: 'pi pi-shopping-cart', routerLink: ['/cart']}
    ];

    this.countries = [
      {name: 'España', code: 'ES'},
    ];
    this.activeItem = this.items[0];
    this.selectedCountry = this.countries[0];
    this.info = ['Trabaja con nosotros','Contacto']
  }

  search(event:any) {
    /* this.mylookupservice.getResults(event.query).then(data => {
        this.results = data;
    }); */
  }

}
