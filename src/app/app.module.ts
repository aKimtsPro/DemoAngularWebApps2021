import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestModule } from './test-module/test.module';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { MenuDemoComponent } from './components/menu-demo/menu-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BindingComponent,
    MenuDemoComponent
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
