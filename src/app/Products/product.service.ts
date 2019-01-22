import { Injectable } from '@angular/core';
import { Product } from './product';
import { products } from './products';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(products);
   }

}
