import { Injectable } from '@angular/core';
import { ProductService ,Product} from './product.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService{  
  constructor(public loger:LoggerService) { }

  getProduct(): Product {
    return new Product(1, '三星', 1122, '最新款三星手机')
  }
}
