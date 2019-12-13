import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

// Step 2: Configuring the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/new', component: AddContactComponent},
  { path: 'contacts/1', component: ContactDetailsComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Step 3:  Registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
