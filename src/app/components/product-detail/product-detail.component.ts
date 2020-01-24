import { Component, OnInit, Input } from '@angular/core';
import { MercadolibreApiService } from '../../services/mercadolibre-api/mercadolibre-api.service';
import { Item } from "../../entities/item";

declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() item: Item = this.mercadoapi.item;
  @Input() images = this.item['pictures']

  constructor(private mercadoapi: MercadolibreApiService) { }

  ngOnInit() {
    $('.right')
      .on('click', function () {
        $('.slide')
          .siblings('.active:not(:last-of-type)')
          .removeClass('active')
          .next()
          .addClass('active');
      });

    $('.left')
      .on('click', function () {
        $('.slide')
          .siblings('.active:not(:first-of-type)')
          .removeClass('active')
          .prev()
          .addClass('active');
      });
  }

  addToCar() {
    $('.ui.basic.modal')
      .modal('show')
      ;
  }


}
