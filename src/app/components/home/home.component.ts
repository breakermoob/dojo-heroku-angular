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
  save_string: String;
  count: number;
  offset: number;
  max_offset: number;
  products: String[];
  cards: String[];
  randomSearch: String[] = ["Juegos de ps4", "Ropa Adidas", "Deportes Extremos", "Videojuegos xbox", "Libros de youtubers", "Judo", "smartwatch", "audifonos", "Portatiles Gamer", "Gamer"];


  constructor(private mercadoapi: MercadolibreApiService) {
    this.count = 1;
    this.offset = 0;
    if (this.mercadoapi.products == null) {
      //Results of searchBar Template in Home
      let i = Math.floor(Math.random() * (10 - 0));
      this.search_string = this.randomSearch[i];
      this.save_string = this.search_string;
      this.getProducts()
    } else {
      //Results of searchBar Componenet
      this.products = this.mercadoapi.products;
      this.cards = this.mercadoapi.cards;
      this.search_string = this.mercadoapi.search_string;
      this.max_offset = this.mercadoapi.max_offset;
    }
  }

  ngOnInit() {
  }

  getProducts() {
    this.mercadoapi.get_products(this.search_string, this.offset).subscribe(result => {
      this.products = result;
      this.cards = this.products['results'];
      this.max_offset = this.products['paging'].total;
      console.log("Offset " + this.offset)
      console.log("Max Offset " + this.max_offset)
      this.mercadoapi.search_string = this.search_string;
    })
  }

  search() {
    if (this.save_string === this.search_string) {
      this.getProducts()
    } else {
      this.count = 1;
      this.offset = 0;
      this.getProducts()
    }
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      if (this.save_string === this.search_string) {
        this.getProducts()
      } else {
        this.count = 1;
        this.offset = 0;
        this.getProducts()
      }
    }
  }

  nextPage() {
    if ((this.offset+50) < this.max_offset) {
      this.count++;
      this.offset = this.offset + 50;
      this.getProducts()
    } else {

    }
  }
  previousPage() {
    if (this.count == 1) {

    } else {
      this.count--;
      this.offset = this.offset - 50;
      // this.search_string = this.save_string;
      this.getProducts()
    }
  }
}
