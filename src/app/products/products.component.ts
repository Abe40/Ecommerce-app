import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  // productName1="Nike"
  // productName2="Puma"
  // productName3="Sketcher"
  // product1:Product={
  //   id: 1,
  //   name: 'Nike',
  //   price: 234,
  //   imageUrl: '../../assets/nike.jpg',
  //   description: 'view detail'    


  // }
  // product2:Product={
  //   id: 2,
  //   name: 'Puma',
  //   price: 156,
  //   imageUrl: '../../assets/puma.jpg',
  //   description: 'view detail'    


  // }
  // product3:Product={
  //   id: 3,
  //   name: 'Sketcher',
  //   price: 200,
  //   imageUrl: '../../assets/sketcher.jpg',
  //   description: 'view detail'    


  // }
  onViewDetail(id: number){
    this.route.navigateByUrl('/products/detail/'+id);      
}
productList = PRODUCTS;
  newProduct = new Product();
  type: string = 'view';




  constructor(private route:Router) { }
  

  ngOnInit(): void {
    console.log("called")
  }
  onAdd(){
    this.type = 'add';
  }

  addProduct(){
    this.productList.push(this.newProduct);
    this.newProduct = new Product();
    this.type = 'view';
  }
  onBack(){
    this.type = 'view';
  }
  deleteProduct(name: string){
    this.productList = this.productList.filter((product)=> { 
      return product.name != name; 
  });
  }

}
