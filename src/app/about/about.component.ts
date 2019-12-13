import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  dummyText = 'Lorem ipsum elit. Qua, ab officia nam voluptatem tenetur fugiat facere. Quo laudantium dignissimos ab. Ab voluptate aperiam, dolore omnis aut repellendus.';

  today: Date = new Date();
  
  constructor() {
    console.log('inside constructor');
  }

  // lifecycle hook
  ngOnInit() {
    console.log('inside ngOnInit');
  }

}
