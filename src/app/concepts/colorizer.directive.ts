import { Directive, ElementRef } from '@angular/core';

// decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor( private elementRef: ElementRef ) {  // Dependency Injection
    console.log(this.elementRef.nativeElement);
    let el: any = this.elementRef.nativeElement;
    el.style.backgroundColor = 'red';
    el.style.height = '200px';
    el.style.color = 'white';

    // Todo: to manipulate dom you can use Renderer2
    // @HostListener() handle events

    console.log('inside constructor');
  }

}
