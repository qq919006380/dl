import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public loger:LoggerService) {  }
  
  getProduct(): Product {
    this.loger.log('1111111111')  
    return new Product(0, '苹果7', 5999, '最新款苹果手机')
  }
  
}

export class Product {
  constructor(public id: number, public title: string, public price: number, public desc: string) {

  }
}