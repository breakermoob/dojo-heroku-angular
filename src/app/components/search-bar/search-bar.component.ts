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
  @Input() search_string: String;


  constructor(private mercadoapi: MercadolibreApiService, public routes: Router) {
    this.search_string = this.mercadoapi.search_string;
  }

  ngOnInit() {
  }


  getProducts() {
    this.mercadoapi.get_products(this.search_string,0).subscribe(result => {
      this.mercadoapi.products = result;
      this.mercadoapi.cards = result['results'];
      this.mercadoapi.search_string = this.search_string;
      this.mercadoapi.max_offset = result['paging'].total;
      this.routes.navigate(['/home']);
    })
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.getProducts();
    }
  }

}
