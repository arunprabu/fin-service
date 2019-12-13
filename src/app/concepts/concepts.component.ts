import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // String Interpolation related
  appName = 'Finance Service App';
  developedYear = 2019;
  isLoggedIn = true;
  skillsList: string[] = [
    'html', 'css', 'ts'
  ];

  skillsList1: Array<string> = [
    'html', 'css', 'ts'
  ];

  // property binding related
  devName = 'Arun';

  // two way binding
  courseName = 'Angular';

  // custom event binding related
  dataFromChildComp;

  // @ViewChild() to access data from child component (ceb)
  @ViewChild(CebComponent, { static: false }) cebData: any;
  // static true makes the child comp data available in ngOnInit
  // static false make the child comp data available in ngAfterViewInit

  constructor() {
  }

  ngOnInit() {
    console.log(this.cebData); // ref line number 34 
  }

  ngAfterViewInit() {
    console.log(this.cebData);
  }

  calcAge(): number {
    return 20;
  }

  // prop binding related
  isAuth(): boolean {
    return this.isLoggedIn;
  }

  clickMeHandler( evt ) {
    console.log(evt);
    alert('clicked');

  }

  getAge(): number {
    return 100;
  }

  // custom event related
  // Step4: Handle the emitted event and value
  profileLoadedHandler(evt) { // evt has the data passed from child component
    console.log(evt);
    this.dataFromChildComp = evt; // Step 5: Store it in a variable and bind it with html 
  }
}
