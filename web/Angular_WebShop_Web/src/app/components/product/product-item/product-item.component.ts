import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
    @Input() name: String = "";
    @Input() description: String = "";
    @Input() price = 0.0;
}
