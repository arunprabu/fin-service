import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

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

  addContactHandler() {
    console.log(this.contactForm.value);

    // 1. send the above data to service
    this.contactService.createContact(this.contactForm.value)
      .subscribe( (res: any) => { // 2. get the resp from service
        console.log(res);
        if (res && res.id ) {
          this.isSaved = true;
        }
      });

  }

}
