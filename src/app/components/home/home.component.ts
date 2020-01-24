import { Component, OnInit } from '@angular/core';
import { MercadolibreApiService } from '../../services/mercadolibre-api/mercadolibre-api.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search_string: String;

  products: String[];
  cards: String[] = ["", "", "", ""];
  randomSearch: String[] = ["Juegos de ps4", "Ropa", "Deportes", "Videojuegos", "Libros de ciencia", "Artes Marciales", "Relojes de hombre", "Audio", "Calzado de hombre", "Gamer"];


  constructor(private mercadoapi: MercadolibreApiService) {
    if (this.mercadoapi.products == null) {
      let i = Math.floor(Math.random() * (10 - 0));
      console.log(i)
      this.mercadoapi.get_products(this.randomSearch[i]).subscribe(result => {
        this.products = result;
        this.cards = this.products['results'];
      })
    } else {
      this.products = this.mercadoapi.products;
      this.cards = this.mercadoapi.cards;
    }
  }

  ngOnInit() {
  }

  getProducts() {
    this.mercadoapi.get_products(this.search_string).subscribe(result => {
      this.products = result;
      this.cards = this.products['results'];
      console.log(this.search_string)
    })
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.mercadoapi.get_products(this.search_string).subscribe(result => {
        this.products = result;
        this.cards = this.products['results'];
        console.log(this.search_string)
      })
    }
  }

}
