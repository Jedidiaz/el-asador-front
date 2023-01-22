import { Injectable } from '@angular/core';
import { LoginI } from '../../models/Login/login.interface'
import { ResponseI } from '../../models/Login/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {  Observable, VirtualTimeScheduler } from 'rxjs';
import { ProductI, ResponseGET } from '../../models/Productos/Products.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://api-solaricca.cmc-software.com/rest";
  constructor(private http: HttpClient) { }

  onLogin(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/login";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllProducts():Observable<ResponseGET>{
    let direccion = this.url + "/get_products";
    return this.http.get<ResponseGET>(direccion);
  }

  logoutUser(){
    localStorage.removeItem("token")
  }

  loggedIn(){
    return !!localStorage.getItem("token")
  }
}
