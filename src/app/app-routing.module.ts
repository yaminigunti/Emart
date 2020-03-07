import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { SubCategory2Component } from './sub-category2/sub-category2.component';
import { SubCategory3Component } from './sub-category3/sub-category3.component';
import { SubCategory4Component } from './sub-category4/sub-category4.component';
import { SubCategory5Component } from './sub-category5/sub-category5.component';
import { Product2Component } from './product2/product2.component';
import { Product4Component } from './product4/product4.component';
import { Product3Component } from './product3/product3.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { Product8Component } from './product8/product8.component';
import { Product9Component } from './product9/product9.component';
import { Product10Component } from './product10/product10.component';
import { Product11Component } from './product11/product11.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



  const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'newuser',component:SignUpComponent},
    {path:'existinguser',component:LoginComponent},
    {path:'cat',component:CategoryComponent},
    {path:'subcat',component:SubcategoriesComponent},
    {path:'subcat2',component:SubCategory2Component},
    {path:'subcat3',component:SubCategory3Component},
    {path:'subcat4',component:SubCategory4Component},
    {path:'subcat5',component:SubCategory5Component},
    {path:'prdt',component:ProductComponent},
    {path:'prdt2',component:Product2Component},
    {path:'prdt3',component:Product3Component},
    {path:'prdt4',component:Product4Component},
    {path:'prdt5',component:Product5Component},
    {path:'prdt6',component:Product6Component},
    {path:'prdt7',component:Product7Component},
    {path:'prdt8',component:Product8Component},
    {path:'prdt9',component:Product9Component},
    {path:'prdt10',component:Product10Component},
    {path:'prdt11',component:Product11Component},
    {path:'cart',component:CartComponent},
    {path:'check',component:CheckoutComponent},
    {path:'contact',component:ContactUsComponent}
    
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
