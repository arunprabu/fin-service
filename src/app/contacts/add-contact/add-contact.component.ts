import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  // Step 1: Create a Form tag equivalent (FormGroup) in TS
  contactForm: FormGroup;
  isSaved: boolean;

  constructor( private contactService: ContactService) { // dep inj

  }

  ngOnInit() {
    // Step2: Create form element equivalent (FormControl) for the Form in TS
    this.contactForm = new FormGroup({
      name: new FormControl('John', Validators.required),  // Step5 : add validators
      phone: new FormControl('1231242', Validators.required),
      email: new FormControl('a@b.com', [
                                  Validators.required,
                                  Validators.email
                                ])
    });

    // for Step 3 ref HTML
  }

  async addContactHandler() {
    console.log(this.contactForm.value);

    // 1. send the above data to service
    const status: Contact = await this.contactService.createContact(this.contactForm.value);
    console.log(status);

    if (status && status.id ) {
      this.isSaved = true;
    }

  }

}
