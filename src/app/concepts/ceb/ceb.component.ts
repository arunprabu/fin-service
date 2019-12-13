import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  // Step 1: Create Custom Event
  // @Output() will make profileLoaded as custom event available to app-ceb
  @Output() profileLoaded = new EventEmitter();

  dummyText = 'random text';
  
  constructor() { }

  ngOnInit() {
  }

  onSendClickHandler() {
      // Step 2: emitting the event
      this.profileLoaded.emit('arun');
  }

}
