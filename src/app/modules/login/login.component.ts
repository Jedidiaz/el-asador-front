import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {LoginI} from '../../models/Login/login.interface';
import { ResponseI } from '../../models/Login/response.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    errorStatus: boolean = false;
    errorMsj: string = "";
    checked: boolean = false;

  constructor( private api:ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  //metodo login
  validateLogin(usernameValue:string, passwordValue:string){
    let form: LoginI = {email: usernameValue, password: passwordValue};
    this.api.onLogin(form).subscribe(data=> {
      let dataResponse: ResponseI = data;
      if (dataResponse.response == 'ok'){
        localStorage.setItem("token", dataResponse.token);
        this.checked = true;
        this.router.navigate(['']);
      }else{
        this.errorStatus = true;
        this.errorMsj = "Contraseña y/o email invalido(s)";
      }
    })
  }
  
  // onLogin(form: LoginI){
  //   this.api.onLogin(form).subscribe(data=> console.log(data))
  // }
}
