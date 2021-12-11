import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;
  selectedProduct = new Product();
  newProduct = new Product();
 
  


  constructor(private router:ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      param => {
          for (let product of this.products){
            if (product.id == param['id']){ this.selectedProduct = product;console.log(product) }
          }
      }
    );
  }

  updateProduct(){
    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    this.newProduct = new Product();
    this.route.navigateByUrl('products');
  }

}
