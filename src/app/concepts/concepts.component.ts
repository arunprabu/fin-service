import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  // String Interpolation related
  appName = 'Finance Service App';
  developedYear = 2019;
  isLoggedIn = false;
  skillsList: string[] = [
    'html', 'css', 'ts'
  ];

  skillsList1: Array<string> = [
    'html', 'css', 'ts'
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

}
