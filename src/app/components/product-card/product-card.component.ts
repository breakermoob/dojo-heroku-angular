import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../entities/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  @Input() product: Product;


  @Input() "product-card": String;
  constructor() {
  }

  @Input() name: String;

  ngOnInit() {
  }


}
