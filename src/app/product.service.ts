import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './Products/Product';
import { products } from './Products/products';
import { Category } from './Products/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

 getProducts(): Observable<Product[]> {
    return of(products);
  }

}
