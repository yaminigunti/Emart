import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { SubCategory2Component } from './sub-category2/sub-category2.component';
import { SubCategory3Component } from './sub-category3/sub-category3.component';
import { SubCategory4Component } from './sub-category4/sub-category4.component';
import { SubCategory5Component } from './sub-category5/sub-category5.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Product8Component } from './product8/product8.component';
import { Product9Component } from './product9/product9.component';
import { Product10Component } from './product10/product10.component';
import { Product11Component } from './product11/product11.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    SubcategoriesComponent,
    DiscountsComponent,
    SubCategory2Component,
    SubCategory3Component,
    SubCategory4Component,
    SubCategory5Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    Product7Component,
    SellerSignupComponent,
    CartComponent,
    AddProductComponent,
    CheckoutComponent,
    Product8Component,
    Product9Component,
    Product10Component,
    Product11Component,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
