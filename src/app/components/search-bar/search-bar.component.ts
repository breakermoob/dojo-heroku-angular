import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MercadolibreApiService } from '../../services/mercadolibre-api/mercadolibre-api.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() "search-bar": String;
  search_string: String;


  constructor(private mercadoapi: MercadolibreApiService, public routes: Router) {
  }

  ngOnInit() {
  }


  getProducts() {
    this.mercadoapi.get_products(this.search_string).subscribe(result => {
      this.mercadoapi.products = result;
      this.mercadoapi.cards = result['results'];
    })
    this.routes.navigate(['/home']);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.mercadoapi.get_products(this.search_string).subscribe(result => {
        this.mercadoapi.products = result;
        this.mercadoapi.cards = result['results'];
        this.routes.navigate(['/home']);
      })
    }
  }

}
