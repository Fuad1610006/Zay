import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { routing } from './app.routing';
import { SingleShopComponent } from './single-shop/single-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    SingleShopComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterOutlet, routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
