import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../../entities/item";
import { MercadolibreApiService } from "../../services/mercadolibre-api/mercadolibre-api.service";

@Component({
  selector: "app-shoping-car",
  templateUrl: "./shoping-car.component.html",
  styleUrls: ["./shoping-car.component.css"],
})
export class ShopingCarComponent implements OnInit {
  @Input() shoping_car: Item[] = this.mercadoapi.shoping_car;
  total = 0;

  constructor(private mercadoapi: MercadolibreApiService) {}

  ngOnInit() {
    if (this.shoping_car !== []) {
      this.shoping_car.map((item) => {
        this.total = this.total + item.price;
      });
    }
  }

  purchase() {
    this.mercadoapi.shoping_car = [];
  }
}
