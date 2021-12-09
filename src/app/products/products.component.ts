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
    price: 234,
    imageUrl: '../../assets/nike.jpg',
    description: 'view detail'    


  }
  product2:Product={
    id: 2,
    name: 'Puma',
    price: 156,
    imageUrl: '../../assets/puma.jpg',
    description: 'view detail'    


  }
  product3:Product={
    id: 3,
    name: 'Sketcher',
    price: 200,
    imageUrl: '../../assets/sketcher.jpg',
    description: 'view detail'    


  }
  onViewDetail(id: number){
		alert(id);      
}



  constructor() { }

  ngOnInit(): void {
    console.log("called")
  }

}
