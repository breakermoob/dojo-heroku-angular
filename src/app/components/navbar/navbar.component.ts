import { Component, OnInit, Input,  } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {

  @Input() navbar: String;


  constructor() { }

  ngOnInit() {

  }

  toggleButton() {

    $('.ui.labeled.icon.sidebar')
      .sidebar('toggle')
      ;
  }
}
