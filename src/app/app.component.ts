import { Component } from '@angular/core';

// unified by Decorator
@Component({
  selector: 'app-root',    // component exposed on a selector
  templateUrl: './app.component.html',  // html -- only one  -- mandatory
  styleUrls: ['./app.component.css']  // css -- multiple -- optional
})

export class AppComponent {

  // ts

  title = 'fin-service';
}
