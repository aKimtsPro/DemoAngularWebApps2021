import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      'nom': new FormControl('',[Validators.required, Validators.maxLength(60)]),
      'prenom': new FormControl('', [Validators.required, Validators.maxLength(60)]),
      'date-naiss': new FormControl('2021-03-01'),
      'fav-color':new FormControl('blue', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.form.valid )
      console.log( this.form );
    else 
      console.log( 'formulaire invalide' );
  }

}
