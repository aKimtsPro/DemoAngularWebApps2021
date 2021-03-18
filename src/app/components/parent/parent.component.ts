import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  listProd: Produit[] = [
    {
      marque: 'marque1',
      model: 'model1',
      prix: 1
    },
    {
      marque: 'marque2',
      model: 'model2',
      prix: 2
    },
    {
      marque: 'marque3',
      model: 'model3',
      prix: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddProd(produit: Produit){
    this.listProd.push(produit);
  }
}
