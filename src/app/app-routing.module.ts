import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ItemsComponent } from './pages/items/items.component';
import { CartComponent } from './pages/cart/cart.component';
import { WhishlistPageComponent } from './pages/whishlist-page/whishlist-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationOrderComponent } from './pages/confirmation-order/confirmation-order.component';
import { AboutComponent } from './pages/about/about.component';
import { ExhangePolicyComponent } from './pages/exhange-policy/exhange-policy.component';
import { ExhangeRequestComponent } from './pages/exhange-request/exhange-request.component';
import { TrackComponent } from './pages/track/track.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'item/:id', component: ItemsComponent },
  { path: 'whishlist', component: WhishlistPageComponent }, 
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmation', component: ConfirmationOrderComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'exchange-policy', component: ExhangePolicyComponent },
  { path: 'exchange-request', component: ExhangeRequestComponent },
  { path: 'track', component: TrackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
