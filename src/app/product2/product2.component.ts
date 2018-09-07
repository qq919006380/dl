import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  public product: Product
  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.product = this.ProductService.getProduct()
  }

}
