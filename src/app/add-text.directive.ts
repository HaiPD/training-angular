import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddText]'
})
export class AddTextDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = "Hello World !!!";
  }

}
