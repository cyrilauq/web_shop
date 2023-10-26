import { Component, Input } from '@angular/core';
import { Product } from 'src/modules/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    @Input() productList: Product[] = [];
}
