import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './assets/search/search.component';
import { BagComponent } from './assets/bag/bag.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './shared/item/item.component';
import { DeliveryComponent } from './assets/delivery/delivery.component';
import { CashComponent } from './assets/cash/cash.component';
import { SupportComponent } from './assets/support/support.component';
import { WhatsappComponent } from './assets/whatsapp/whatsapp.component';
import { EmailComponent } from './assets/email/email.component';
import { InstagramComponent } from './assets/instagram/instagram.component';
import { ProductsComponent } from './pages/products/products.component';
import { TabComponent } from './shared/tab/tab.component';
import { ArrowdownComponent } from './assets/arrowdown/arrowdown.component';
import { YesiconComponent } from './assets/yesicon/yesicon.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ItemsComponent } from './pages/items/items.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemAddComponent } from './shared/item-add/item-add.component';
import { WhishlistIconComponent } from './assets/whishlist-icon/whishlist-icon.component';
import { WhishlistPageComponent } from './pages/whishlist-page/whishlist-page.component';
import { CloseIconComponent } from './assets/close-icon/close-icon.component';
import { EmptyPageComponent } from './shared/empty-page/empty-page.component';
import { InvoiceComponent } from './shared/invoice/invoice.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationOrderComponent } from './pages/confirmation-order/confirmation-order.component';
import { AboutComponent } from './pages/about/about.component';
import { ExhangeRequestComponent } from './pages/exhange-request/exhange-request.component';
import { ExhangePolicyComponent } from './pages/exhange-policy/exhange-policy.component';
import { TrackComponent } from './pages/track/track.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { EyeIconComponent } from './assets/eye-icon/eye-icon.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BagComponent,
    HomeComponent,
    ItemComponent,
    DeliveryComponent,
    CashComponent,
    SupportComponent,
    WhatsappComponent,
    EmailComponent,
    InstagramComponent,
    ProductsComponent,
    TabComponent,
    ArrowdownComponent,
    YesiconComponent,
    PaginationComponent,
    ItemsComponent,
    CartComponent,
    ItemAddComponent,
    WhishlistIconComponent,
    WhishlistPageComponent,
    CloseIconComponent,
    EmptyPageComponent,
    InvoiceComponent,
    CheckoutComponent,
    ConfirmationOrderComponent,
    AboutComponent,
    ExhangeRequestComponent,
    ExhangePolicyComponent,
    TrackComponent,
    LoginComponent,
    ForgetPasswordComponent,
    EyeIconComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
