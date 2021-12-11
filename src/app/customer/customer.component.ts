import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onViewDetail(){
    this.route.navigateByUrl('/customer/detail');
  }

}
