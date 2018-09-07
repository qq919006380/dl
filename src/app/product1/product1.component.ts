import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  product:Product //声明产品
  constructor(private ProductService:ProductService) { }//声明私有服务

  ngOnInit() {
    this.product=this.ProductService.getProduct()
  }

}
