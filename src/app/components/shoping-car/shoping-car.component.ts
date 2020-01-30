import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../../entities/item";
import { MercadolibreApiService } from '../../services/mercadolibre-api/mercadolibre-api.service';


@Component({
  selector: 'app-shoping-car',
  templateUrl: './shoping-car.component.html',
  styleUrls: ['./shoping-car.component.css']
})
export class ShopingCarComponent implements OnInit {

  @Input() shoping_car: Item[] = this.mercadoapi.shoping_car;

  constructor(private mercadoapi: MercadolibreApiService) { }

  ngOnInit() {
    console.log(this.shoping_car)
  }
}
