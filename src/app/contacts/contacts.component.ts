import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';
import { Contact } from './contact';

declare var $: any; 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  qvContactData: any;

  contactsSubscription: Subscription;

  constructor( private contactService: ContactService) {
    console.log('inside constructor');
  }

  // life cycle hook
  ngOnInit() {
    console.log('inside ngOnInit');
    // ideal place for you to exec ajax calls
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( ( res: Contact[]) => {
        console.log(res);
        this.contactList = res;
      });
  }

  // showQuickView( qvContactData ) {
  //   this.qvContactData = qvContactData;
  //   $('#quickViewModal').modal('show');
  // }

  // will fire when you navigate away from this component 
  ngOnDestroy() {
    // right place to unsubscribe and delete the data
    console.log('inside destroy in contacts');
    this.contactsSubscription.unsubscribe();

    // dont forget to empty the data
    if (this.contactList) {
      this.contactList.length = 0;
    }
  }


}
