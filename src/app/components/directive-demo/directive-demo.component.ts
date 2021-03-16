import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-directive',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  personList: Person[] = [
    {
      nom:"luc",
      age:40,
      couleurPref:"yellow"
    },
    {
      nom:"marie",
      age:36,
      couleurPref:"blue"
    },
    {
      nom:"dominique",
      age:14,
      couleurPref:"green"
    }
  ]

  nom: string;
  age: number;
  color: string;

  affichage = 1;

  constructor() { }

  ngOnInit(): void {

    this.personList.filter( (pers) => pers.couleurPref == 'green')
  }

  filteredList(): Person[]{
    return this.personList.filter( (pers) => pers.couleurPref == 'green');
  }

  onClick(){
    let toAdd: Person = {
      nom: this.nom,
      age: this.age,
      couleurPref: this.color
    };
    this.personList.push(toAdd);
  }

  onChange(){
    alert("affichage modifié");
  }

}
