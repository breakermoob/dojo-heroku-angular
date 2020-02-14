import { Component, OnInit } from '@angular/core';
import { MercadolibreApiService } from '../../services/mercadolibre-api/mercadolibre-api.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //search bar
  search_string: String;
  save_string: String;

  //pagination
  count: number;
  offset: number;
  max_offset: number;

  //Grid Objects
  products: String[];
  cards: String[];
  randomItems: String[] = [
    "Juegos de ps4", "Ropa Adidas", "Deportes Extremos",
    "Videojuegos xbox", "Libros de youtubers", "Judo",
    "smartwatch", "audifonos", "Portatiles Gamer",
    "Accesorios para Vehículos", "Alimentos", "Mascotas",
    "Antigüedades", "Arte", "Bebés", "Belleza", "Cámaras",
    "Carro", "Celulares", "Computación", "Fitness",
    "Electrodomésticos", "Electrónica", "Construcción",
    "Hogar", "Oficinas", "Inmuebles", "Instrumentos Musicales",
    "Juegos", "Comics", "Música", "Fiestas", "Joyas", "Salud",
    "Gamer", "Motos", "Xiaomi", "Lenovo", "Mazda cx5", "bmw"];


  constructor(private mercadoapi: MercadolibreApiService) {
    this.count = 1;
    this.offset = 0;
    if (this.mercadoapi.products == null) {
      //Results of searchBar Template in Home
      this.randomSearch();
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

  randomSearch() {
    let i = Math.floor(Math.random() * 40);
    this.search_string = this.randomItems[i];
    this.save_string = this.search_string;
    this.getProducts()
  }

     getProducts() {
     this.mercadoapi.get_products(this.search_string, this.offset).subscribe(result => {
      this.products = result;
      this.cards = this.products['results'];
      this.max_offset = this.products['paging'].total;
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
    if ((this.offset + 50) < this.max_offset) {
      this.count++;
      this.offset = this.offset + 50;
      this.getProducts()
    } else {

    }
    this.goUp()
  }
  previousPage() {
    if (this.count == 1) {

    } else {
      this.count--;
      this.offset = this.offset - 50;
      // this.search_string = this.save_string;
      this.getProducts()
    }
    this.goUp()
  }
  goUp() {
    // window.scroll(0, 0);
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 80); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
