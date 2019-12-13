import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

// Step 2: Configuring the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', children: [
      { path: '', component: ContactsComponent},
      { path: 'new', component: AddContactComponent},
      { path: ':id', component: ContactDetailsComponent}
    ],  canActivate: [ AuthGuard]
  },
  { path: 'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Step 3:  Registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
