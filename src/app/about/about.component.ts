import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() {
    console.log('inside constructor');
  }

  // lifecycle hook
  ngOnInit() {
    console.log('inside ngOnInit');
  }

}
