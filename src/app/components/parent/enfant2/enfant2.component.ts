import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.css']
})
export class Enfant2Component implements OnInit {

  @Output('add-event')
  addEvent = new EventEmitter<Produit>()

  creating: Produit = {
    marque: '',
    model: '',
    prix: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log(event);
    this.addEvent.emit(this.creating);
  }
}
