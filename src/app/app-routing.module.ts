import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { TestActivateService } from 'src/app/services/test-activate.service'
import { DetailsComponent } from './components/binding/details/details.component';
import { Page404Component } from './components/page404/page404.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'binding/:nbr', component: BindingComponent },
  { path: 'binding/:nbr/details', component: DetailsComponent },
  { path: 'directives', component: DirectiveDemoComponent, canActivate: [TestActivateService] },
  { path: 'accueil', component: AccueilComponent },
  { path: 'pipe', component: PipeComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'forms', component: FormsComponent },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
