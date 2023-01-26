import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorStatus: boolean = false;
  errorMsj: string = '';
  checked: boolean = false;
  validEmail: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  messageError = { message: '', color: 'black' };
  formLogin: FormGroup;
  constructor(
    private api: ApiService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.formLogin = formbuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.validEmail)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}
  //metodo login
  validateLogin() {
    console.log(
      this.formLogin.value.email + ' ' + this.formLogin.value.password
    );
    const form = new FormData();
    form.append('email', this.formLogin.value.email);
    form.append('password', this.formLogin.value.password);
    this.api.onLogin(form).subscribe({
      next: (res) => {
        console.log('entré')
        if(res.response === 'ok'){
          localStorage.setItem('token', res.token)
          window.location.href = "/"
        }else this.messageError = {
          message: res.error,
          color: 'rgb(255, 92, 92)'
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // onLogin(form: LoginI){
  //   this.api.onLogin(form).subscribe(data=> console.log(data))
  // }
}
