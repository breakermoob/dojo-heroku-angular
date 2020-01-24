import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../entities/product";
import { MercadolibreApiService } from '../../services/mercadolibre-api/mercadolibre-api.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Input() item: String;
  @Input() "product-card": String;

  constructor(private mercadoapi: MercadolibreApiService,  public routes: Router) {
  }

  ngOnInit() {
  }

  seeMore(id) {
    this.mercadoapi.get_product_by_id(id).subscribe(result => {
      if (result == null) {
        console.log('Id not found');
      } else {
        console.log(result);
        this.mercadoapi.item = result;
        this.routes.navigate(['/detail']);
      }
    })
  }


}
