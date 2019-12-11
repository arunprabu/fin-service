import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { FinanceComponent } from './finance/finance.component';
import { AboutComponent } from './about/about.component';

// Step 2: Configuring the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'finance', component: FinanceComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Step 3:  Registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
