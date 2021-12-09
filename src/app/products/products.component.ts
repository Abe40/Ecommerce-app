import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName1="Nike"
  productName2="Puma"
  productName3="Sketcher"

  constructor() { }

  ngOnInit(): void {
    console.log("called")
  }

}
