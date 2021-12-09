import { Component, OnInit } from '@angular/core';
import { Product } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // productName1="Nike"
  // productName2="Puma"
  // productName3="Sketcher"
  product1:Product={
    id: 1,
    name: 'Nike',
    price: 2000,
    imageUrl: '../../assets/nike.jpg',
    description: 'you can read more'    


  }
  product2:Product={
    id: 2,
    name: 'Puma',
    price: 2000,
    imageUrl: '../../assets/puma.jpg',
    description: 'you can read more'    


  }
  product3:Product={
    id: 3,
    name: 'Sketcher',
    price: 2000,
    imageUrl: '../../assets/sketcher.jpg',
    description: 'you can read more'    


  }

  constructor() { }

  ngOnInit(): void {
    console.log("called")
  }

}
