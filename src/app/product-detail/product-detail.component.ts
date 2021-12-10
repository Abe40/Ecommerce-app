import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products=PRODUCTS;
  selectedProduct: any;
  


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
          for (let product of this.products){
            if (product.id == param['id']){ this.selectedProduct = product;console.log(product) }
          }
      }
    );
  }

}
