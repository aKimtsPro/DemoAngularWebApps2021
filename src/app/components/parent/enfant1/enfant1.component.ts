import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-enfant1',
  templateUrl: './enfant1.component.html',
  styleUrls: ['./enfant1.component.css']
})
export class Enfant1Component implements OnInit {

  @Input('prod-list')
  prodList: Produit[];

  constructor() { }

  ngOnInit(): void {
  }

}
