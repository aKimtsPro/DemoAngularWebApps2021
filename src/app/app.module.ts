import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestModule } from './test-module/test.module';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavComponent } from './components/nav/nav.component';
import { DetailsComponent } from './components/binding/details/details.component';
import { Page404Component } from './components/page404/page404.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { BouteillePipe } from './pipes/bouteille.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Enfant1Component } from './components/parent/enfant1/enfant1.component';
import { Enfant2Component } from './components/parent/enfant2/enfant2.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BindingComponent,
    DirectiveDemoComponent,
    AccueilComponent,
    NavComponent,
    DetailsComponent,
    Page404Component,
    PipeComponent,
    BouteillePipe,
    ParentComponent,
    Enfant1Component,
    Enfant2Component,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
