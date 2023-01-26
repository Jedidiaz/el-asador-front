import { Sucursal } from './../cart/sucursal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-m',
  templateUrl: './pay-m.component.html',
  styleUrls: ['./pay-m.component.css']
})
export class PayMComponent implements OnInit {

  option: boolean = false;
  selectedValue: string = 'val1';
  selectedPay: string = '1';

  sucursal: Sucursal[] = [
    { name: 'cra 44 # 85 esquina', code: '1' },
    { name: 'cra 44 # 85 esquina', code: '2' },
    { name: 'cra 44 # 85 esquina', code: '3' },
    { name: 'cra 44 # 85 esquina', code: '4' },
  ];
  selectSucursal: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
