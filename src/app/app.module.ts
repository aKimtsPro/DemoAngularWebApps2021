import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestModule } from './test-module/test.module';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BindingComponent,
    DirectiveDemoComponent
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
