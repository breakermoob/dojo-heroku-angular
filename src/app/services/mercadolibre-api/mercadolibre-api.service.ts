import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Item } from "../../entities/item";


const URL_MERCADOAPI = "https://api.mercadolibre.com";
const URL_GET_SEARCH = "/sites/MCO/search?q="
const URL_GET_SELLER = "/sites/MCO/search?seller_id="
const URL_GET_SEARCH_OFFSET = "&offset="
const URL_GET_PRODUCT_BY_ID = "/items/"

@Injectable({
  providedIn: 'root'
})
export class MercadolibreApiService {

  @Input() item: Item;
  @Input() products: String[];
  @Input() cards: String[];
  @Input() search_string: String;
  @Input() max_offset: number;
  @Input() shoping_car: Item[] = [];

  constructor(private http: HttpClient) { }


  get_products(text, offset): Observable<any> {
    return this.http.get<String>(URL_MERCADOAPI + URL_GET_SEARCH + text + URL_GET_SEARCH_OFFSET + offset).map(Response => {
      let i = Response["results"].length;
      let j = Response["results"]
      for (let index = 0; index < i; index++) {
        j[index].thumbnail = j[index].thumbnail.replace(/-I/i, "-V")
        // j[index].seller.id = this.get_seller(j[index].seller.id);
      }
      return Response
    });
  }

  get_seller(id): Observable<any> {
    return this.http.get<String>(URL_MERCADOAPI + URL_GET_SELLER + id).map(Response => {
      return Response["seller"].nickname
    });
  }

  get_product_by_id(id): Observable<any> {
    return this.http.get<String>(URL_MERCADOAPI + URL_GET_PRODUCT_BY_ID + id).map(Response => {
      console.log(Response)
      if (Response["shipping"].free_shipping == true) {
        Response["shipping"].free_shipping = "Envío Gratis";
      } else {
        Response["shipping"].free_shipping = "El envío se acuerda con el vendedor";
      }
      return Response
    });
  }

}
