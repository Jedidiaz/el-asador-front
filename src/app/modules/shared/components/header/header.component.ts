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
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['']},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Cart', icon: 'pi pi-shopping-cart', routerLink: ['/cart']}
    ];

    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
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
