import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-demo',
  templateUrl: './menu-demo.component.html',
  styleUrls: ['./menu-demo.component.css']
})
export class MenuDemoComponent implements OnInit {

  pateList = [ "pate à la carbonara", "pate au saumon" ];

  constructor() { }

  ngOnInit(): void {
  }

}
