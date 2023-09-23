import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { SingleShopComponent } from './single-shop/single-shop.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "shop", component: ShopComponent },
{ path: "about", component: AboutComponent },
{ path: "contact", component: ContactComponent },
{ path: "single-shop", component: SingleShopComponent },
{ path: "", component: HomeComponent }]
export const routing = RouterModule.forRoot(routes);