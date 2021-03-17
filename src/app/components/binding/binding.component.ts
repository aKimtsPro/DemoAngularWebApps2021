import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  nom = 'alexandre';
  lienVers = 'http://www.google.com';
  param;

  constructor(route: ActivatedRoute) { 
    route.params.subscribe( params => this.param=params['nbr'] );
  }

  ngOnInit(): void {
  }

}
