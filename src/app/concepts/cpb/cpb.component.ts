import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // @Input() will make age as custom property to <app-cpb>
  @Input() age = 20;

  constructor() { }

  ngOnInit() {
  }

}
