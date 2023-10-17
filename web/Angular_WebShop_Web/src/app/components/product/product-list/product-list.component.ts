import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = [
        {
            name: "One",
            price: 1.0
        },
        {
            name: "Two",
            price: 2.0
        }, 
        {
            name: "Three",
            price: 3.0
        }
    ];
}
