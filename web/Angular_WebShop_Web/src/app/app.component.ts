import { Component } from '@angular/core';
import { Product } from 'src/modules/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WebShop';
    products: Product[] = [
        new Product(
            "One",
            1.0,
            "Description"
        ),
        new Product(
            "Two",
            2.0,
            "Description"
        ),
        new Product(
            "Three",
            3.0,
            "Description"
        )
    ];
}
