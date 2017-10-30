import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  // code with Mosh
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // my solution
  // isOpen: boolean;
  // @Output('change') change = new EventEmitter(); // alias will keep the component of the API stable

  // sectionOpenClose() {
  //   this.isOpen = !this.isOpen;
  //   this.change.emit({ newValue: this.isOpen});
  // }

  // new branch

}
