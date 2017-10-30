import { Directive, HostListener, ElementRef, ViewEncapsulation, Input } from '@angular/core';

// This class, named InputFormatDirective, is decorated with a directive decorator function
//  BEST PRACTISE: prefix directive names here "app" is used to avoid confusion with others
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat') format;
  // string alias selector of this directive used to keep contract of directive stable and cleaner code on template

  @HostListener('blur') onBlur() { // use HostListener decorator to subscribe to events raised from the host DOM object
    const value: string = this.el.nativeElement.value;

    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
    else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
