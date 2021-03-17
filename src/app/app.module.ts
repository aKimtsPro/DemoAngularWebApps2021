import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestModule } from './test-module/test.module';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavComponent } from './components/nav/nav.component';
import { DetailsComponent } from './components/binding/details/details.component';
import { Page404Component } from './components/page404/page404.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { BouteillePipe } from './pipes/bouteille.pipe';

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
    BouteillePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
