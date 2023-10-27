import { Component } from '@angular/core';
import { Product } from 'src/modules/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
