import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;

  contactDetailsSubscription: Subscription;

  constructor( private route: ActivatedRoute, private contactService: ContactService ) { }

  ngOnInit() {
    // read url params in angular 6
    const id = this.route.snapshot.paramMap.get('id');

    this.contactDetailsSubscription = this.contactService.getContactById(id)
      .subscribe( (res: Contact ) => {
        this.contactData = res;
      });
  }

  onEditModalOpen() {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  async onUpdateHandler( f: NgForm) {
    console.log(f);  // entire form object
    console.log(this.duplicateContactData);

    const status: Contact = await this.contactService.updateContact(this.duplicateContactData)

    console.log(status );

    if (status && status.id) {
      this.isUpdated = true;
      this.contactData = status;
    }
  }

  ngOnDestroy() {
    this.contactDetailsSubscription.unsubscribe();
  }

}
