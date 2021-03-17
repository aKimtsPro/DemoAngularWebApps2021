import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  date= new Date();
  prix= 15;
  toLower= 'SALUT';
  toUpper= 'coucou';
  nbr= 89.1;
  toJson = {
    nom: 'dubois',
    prenom: 'luc'
  };

  bouteille = {
    marque: 'flotte',
    capacite: 33
  }

  constructor() { }

  ngOnInit(): void {
  }

}
