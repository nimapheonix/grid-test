import { Component } from '@angular/core';
import { Product } from './Products/Product';
import { ProductService } from './Products/product.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[ProductService]
    //   template: ` `
})
export class AppComponent {
    public gridData: any[] = [];
    constructor(private productService: ProductService) {
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts():void {
        this.productService.getProducts()
        .subscribe(products => this.gridData = products);
    }
}
