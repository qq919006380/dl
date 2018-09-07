import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProduct(): Product {
    return new Product(0, '苹果7', 5999, '最新款苹果手机')
  }
}

export class Product {
  constructor(public id: number, public title: string, public price: number, public desc: string) {

  }
}