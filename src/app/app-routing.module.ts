import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { TestActivateService } from 'src/app/services/test-activate.service'
import { DetailsComponent } from './components/binding/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'binding/:nbr', component: BindingComponent },
  { path: 'binding/:nbr/details', component: DetailsComponent },
  { path: 'directives', component: DirectiveDemoComponent, canActivate: [TestActivateService] },
  { path: 'accueil', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
