import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


const URL_MERCADOAPI = "https://api.mercadolibre.com/sites/MCO/search?q=";

@Injectable({
  providedIn: 'root'
})
export class MercadolibreApiService {

  constructor(private http: HttpClient) { }


  get_products(text): Observable<any> {
    return this.http.get<String>(URL_MERCADOAPI + text).map(Response => {
      let i = Response["results"].length;
      let j = Response["results"]
      for (let index = 0; index < i; index++) {
        j[index].thumbnail = j[index].thumbnail.replace(/-I/i, "-C")
      }
       return Response});
  }

}
