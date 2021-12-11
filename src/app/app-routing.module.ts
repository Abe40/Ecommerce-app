import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
},
{
  path:"customer",
component:CustomerComponent
},
{
  path:"customer/detail",
  component:CustomerdetailComponent
},
{
  path:"product/detail",
  component:ProductDetailComponent

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

