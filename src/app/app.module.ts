import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
//httpclient-------------------------------------------
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { SliderComponent } from './modules/shared/components/slider/slider.component';
import {CarouselModule} from 'primeng/carousel';
import { CartComponent } from './modules/cart/cart.component';
import {OrderListModule} from 'primeng/orderlist';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CarouselService } from './servicios/carousel/carousel.service';
//login---------------
import { LoginComponent } from './modules/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CartComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    OrderListModule,
    DropdownModule,
    TabMenuModule,
    AutoCompleteModule,
    HttpClientModule,
    InputTextModule,
    RadioButtonModule,
    OverlayPanelModule,
    FormsModule
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
