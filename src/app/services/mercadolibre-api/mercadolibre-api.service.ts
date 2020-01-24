import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Item } from "../../entities/item";


const URL_MERCADOAPI = "https://api.mercadolibre.com";
const URL_GET_SEARCH = "/sites/MCO/search?q="
const URL_GET_PRODUCT_BY_ID = "/items/"

@Injectable({
  providedIn: 'root'
})
export class MercadolibreApiService {

  @Input() item:Item[] = [];

  constructor(private http: HttpClient) { }


  get_products(text): Observable<any> {
    return this.http.get<String>(URL_MERCADOAPI + URL_GET_SEARCH + text).map(Response => {
      let i = Response["results"].length;
      let j = Response["results"]
      for (let index = 0; index < i; index++) {
        j[index].thumbnail = j[index].thumbnail.replace(/-I/i, "-P")
      }
      return Response
    });
  }
  get_product_by_id(id): Observable<any> {
    return this.http.get<String>(URL_MERCADOAPI + URL_GET_PRODUCT_BY_ID + id).map(Response => {
      return Response
    });
  }

}
