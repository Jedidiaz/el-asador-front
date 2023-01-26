import { DataGeneratorTokenModel } from './../../models/Cart/cart.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pay-m',
  templateUrl: './pay-m.component.html',
  styleUrls: ['./pay-m.component.css'],
  providers: [MessageService],
})
export class PayMComponent implements OnInit {
  option: boolean = false;
  selectedValue: string = 'val1';
  selectedPay: string = '1';

  sucursal: Array<any> = [];
  formRetiro: FormGroup;
  passEnvio: boolean = false;
  data: DataGeneratorTokenModel
  Ds_MerchantParameters = ''
  Ds_SignatureVersion = ''
  Ds_Signature = ''
  constructor(
    private api: ApiService,
    private formbuilder: FormBuilder,
    private message: MessageService
  ) {
    this.formRetiro = formbuilder.group({
      name: ['', Validators.required],
      lastName1: ['', Validators.required],
      lastName2: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sucursal: [''],
    });
  }


  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales() {
    this.api.getSucursal().subscribe({
      next: (res) => {
        res.data.map((item) => {
          this.sucursal.push({
            name: item.nombre,
            code: item.id,
          });
        });
        console.log(this.sucursal);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //verfy postal
  verifyPostalCode(cod: string) {
    const form = new FormData();
    form.append('postal_code', cod);
    this.api.VerifyCodPostal(form).subscribe({
      next: (res) => {
        if (res.response === 'ok' && res.data === 'yes') this.passEnvio = true;
        else {
          this.message.add({
            severity: 'error',
            summary:
              'Lamentablemente no tenemos coberturas con nuestras tiendas a ese codigo postal.',
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //orders
  createorderRetiro() {
    const form = new FormData()
    form.append('amount', '100')
    this.api.GenerateOrder(form).subscribe({
      next: (res)=> {
        this.Ds_MerchantParameters = res.data.Ds_MerchantParameters
        this.Ds_SignatureVersion = res.data.Ds_SignatureVersion
        this.Ds_Signature = res.data.Ds_Signature
        const ff = document.getElementById('payform')
        ff?.onsubmit
      }
    })
  }

  pago(){
    fetch ('https://sis-t.redsys.es:25443/sis/realizarPago', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=> console.log(res))
  }
}
