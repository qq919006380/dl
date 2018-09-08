import { Component, OnInit } from '@angular/core';
import { Product,ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers:[{
    provide: ProductService,useClass:AnotherProductService
  }]
  // providers: [ProductService],
})
export class Product2Component implements OnInit {

  product:Product //声明产品
  constructor(private ProductService:ProductService) { }//声明私有服务

  ngOnInit() {
    this.product=this.ProductService.getProduct()
  }

}
